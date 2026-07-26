"use client";

import { useEffect } from "react";

/**
 * Lightweight first-party visitor tracker.
 *
 * - Records one visit per page (geo/source/bot are resolved server-side).
 * - Measures real time-on-page and flushes it on tab hide / unload.
 * - Auto-captures clicks on buttons and links so the admin can see which
 *   CTAs get used, without wiring every component. Add `data-track="Label"`
 *   to any element to give it a custom label.
 *
 * Bots that don't run JS never reach this code; those that do are filtered
 * server-side by user-agent.
 */
export default function Analytics() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/admin")) return; // Don't count the owner's dashboard.

    // Stable per-tab session id.
    let sessionId = sessionStorage.getItem("sb_sid");
    if (!sessionId) {
      sessionId =
        (crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`);
      sessionStorage.setItem("sb_sid", sessionId);
    }

    const params = new URLSearchParams(window.location.search);

    const send = (payload: Record<string, unknown>) => {
      try {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, ...payload }),
          keepalive: true,
        }).catch(() => {});
      } catch {
        /* ignore */
      }
    };

    // 1) Register the visit.
    send({
      type: "visit",
      path,
      referrer: document.referrer || null,
      utmSource: params.get("utm_source"),
    });

    // 2) Time on page → flushed via sendBeacon on hide/unload.
    const start = Date.now();
    const flushDuration = () => {
      const durationMs = Date.now() - start;
      const body = JSON.stringify({ type: "duration", sessionId, path, durationMs });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
      } else {
        send({ type: "duration", path, durationMs });
      }
    };
    const onHide = () => {
      if (document.visibilityState === "hidden") flushDuration();
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flushDuration);

    // 3) Click tracking on buttons / links.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest(
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
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flushDuration);
      document.removeEventListener("click", onClick, { capture: true } as never);
      document.removeEventListener("submit", onSubmit, { capture: true } as never);
    };
  }, []);

  return null;
}
