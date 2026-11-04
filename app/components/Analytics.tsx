"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { createVisibleTimer } from "../lib/visible-time";

let fallbackSessionId: string | null = null;

function newId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getSessionId() {
  try {
    const stored = sessionStorage.getItem("sb_sid");
    if (stored) return stored;
    const id = newId();
    sessionStorage.setItem("sb_sid", id);
    return id;
  } catch {
    return (fallbackSessionId ??= newId());
  }
}

/**
 * Lightweight first-party visitor tracker.
 *
 * - Records one visit per page (geo/source/bot are resolved server-side).
 * - Measures visible time, including client-side navigation and repeat views.
 * - Auto-captures clicks on buttons and links so the admin can see which
 *   CTAs get used, without wiring every component. Add `data-track="Label"`
 *   to any element to give it a custom label.
 *
 * Bots that don't run JS never reach this code; those that do are filtered
 * server-side by user-agent.
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname;
    if (!path || /^\/(admin|api)(\/|$)/.test(path)) return;

    const sessionId = getSessionId();
    const pageViewId = newId();

    const params = new URLSearchParams(window.location.search);
    const context = {
      sessionId, pageViewId, path,
      referrer: document.referrer || null,
      utmSource: params.get("utm_source"),
    };

    const send = (payload: Record<string, unknown>) => {
      try {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...context, ...payload }),
          keepalive: true,
        }).catch(() => {});
      } catch {
        /* ignore */
      }
    };

    // 1) Register the visit.
    send({ type: "visit" });

    // 2) Heartbeats expose time before departure; hidden tabs are paused.
    const timer = createVisibleTimer(() => performance.now(), document.visibilityState === "visible");
    const flushDuration = (beacon = false) => {
      const payload = { type: "duration", durationMs: timer.durationMs() };
      if (beacon && navigator.sendBeacon) {
        try {
          const accepted = navigator.sendBeacon(
            "/api/track",
            new Blob([JSON.stringify({ ...context, ...payload })], { type: "application/json" })
          );
          if (accepted) return;
        } catch {
          // A full or disabled beacon queue falls back to keepalive fetch.
        }
      }
      send(payload);
    };
    const onVisibility = () => {
      const visible = document.visibilityState === "visible";
      timer.setVisible(visible);
      flushDuration(!visible);
    };
    const onPageHide = () => {
      timer.setVisible(false);
      flushDuration(true);
    };
    const onPageShow = () => timer.setVisible(document.visibilityState === "visible");
    const heartbeat = window.setInterval(() => {
      if (document.visibilityState === "visible") flushDuration();
    }, 15000);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("pageshow", onPageShow);

    // 3) Click tracking on buttons / links.
    const onClick = (e: MouseEvent) => {
      const el = (e.target instanceof Element ? e.target : null)?.closest(
        "[data-track], a[href], button"
      ) as HTMLElement | null;
      if (!el) return;

      const label =
        el.getAttribute("data-track") ||
        el.getAttribute("aria-label") ||
        el.textContent?.trim().replace(/\s+/g, " ").slice(0, 80) ||
        el.getAttribute("href") ||
        el.tagName.toLowerCase();

      const href = el.getAttribute("href") || "";
      const eventName = href.includes("wa.me")
        ? "whatsapp_click"
        : href.startsWith("mailto:")
          ? "email_click"
          : href.startsWith("tel:")
            ? "phone_click"
            : el.getAttribute("data-track") || label;

      if (eventName) {
        send({ type: "event", name: eventName, label });
        const dataLayer = (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
        dataLayer?.push({ event: eventName, event_label: label, page_path: path });
      }
    };
    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      const eventName = form.getAttribute("data-conversion") || "contact_form_submit";
      send({ type: "event", name: eventName });
      const dataLayer = (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
      dataLayer?.push({ event: eventName, page_path: path });
    };
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });

    return () => {
      onPageHide();
      window.clearInterval(heartbeat);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, [pathname]);

  return null;
}
