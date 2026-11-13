"use client";

import { useEffect, type RefObject } from "react";
import { usePathname } from "next/navigation";
import { createVisibleTimer } from "../lib/visible-time";
import { referrerOrigin } from "../lib/analytics";

export type TrackingPreferences = { audience: boolean; advertising: boolean };

let fallbackSessionId: string | null = null;

export function clearAnalyticsSession() {
  fallbackSessionId = null;
  try { sessionStorage.removeItem("sb_sid"); } catch { /* Storage is unavailable. */ }
}

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
export default function Analytics({ audience, advertising, activeChoice }: TrackingPreferences & {
  activeChoice: RefObject<TrackingPreferences>;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname;
    if (!path || /^\/(admin|api)(\/|$)/.test(path)) return;

    const params = new URLSearchParams(window.location.search);
    const context = audience ? {
      sessionId: getSessionId(), pageViewId: newId(), path,
      referrer: referrerOrigin(document.referrer),
      utmSource: params.get("utm_source"),
    } : null;

    const send = (payload: Record<string, unknown>) => {
      if (!context || !activeChoice.current.audience) return;
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
      if (!context || !activeChoice.current.audience) return;
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
    const heartbeat = audience ? window.setInterval(() => {
      if (document.visibilityState === "visible") flushDuration();
    }, 15000) : undefined;
    if (audience) {
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("pagehide", onPageHide);
      window.addEventListener("pageshow", onPageShow);
    }

    // 3) Click tracking on buttons / links.
    const pushAdEvent = (event: string, label?: string) => {
      if (!advertising || !activeChoice.current.advertising) return;
      const dataLayer = (window as typeof window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
      dataLayer?.push({ event, event_label: label, page_path: path });
    };
    const onClick = (e: MouseEvent) => {
      const el = (e.target instanceof Element ? e.target : null)?.closest(
        "[data-track], a[href], button"
      ) as HTMLElement | null;
      if (!el || el.closest("[data-no-track]") || el.matches("[data-conversion] button[type=submit]")) return;

      const label =
        el.getAttribute("data-track") ||
        el.getAttribute("aria-label") ||
        el.textContent?.trim().replace(/\s+/g, " ").slice(0, 80) ||
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
        pushAdEvent(eventName, label);
      }
    };
    const onSubmit = (e: SubmitEvent) => {
      const eventName = (e.target as HTMLFormElement | null)?.getAttribute("data-conversion");
      if (!eventName) return;
      send({ type: "event", name: eventName });
      pushAdEvent(eventName);
    };
    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });

    return () => {
      if (audience) onPageHide();
      if (heartbeat !== undefined) window.clearInterval(heartbeat);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, [pathname, audience, advertising, activeChoice]);

  return null;
}
