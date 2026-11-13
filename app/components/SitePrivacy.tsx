"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../i18n/translations";
import Analytics, { clearAnalyticsSession, type TrackingPreferences } from "./Analytics";

const STORAGE_KEY = "sb_privacy_v1";
const CHOICE_DURATION_MS = 180 * 24 * 60 * 60 * 1000;
const GOOGLE_ADS_ID = "AW-17614508548";
const declined = { audience: false, advertising: false };
const accepted = { audience: true, advertising: true };

const copy = {
  fr: {
    title: "Confidentialité", settings: "Préférences de confidentialité",
    explanation: "Choisissez si vous autorisez la mesure des visites sur ce site et la publicité ou la mesure publicitaire avec nos partenaires.",
    audience: "Mesure des visites", advertising: "Publicité et mesure publicitaire", accept: "Tout accepter", decline: "Tout refuser",
    customize: "Personnaliser", save: "Enregistrer mes choix", close: "Fermer", policy: "Politique de confidentialité",
  },
  en: {
    title: "Privacy", settings: "Privacy preferences",
    explanation: "Choose whether to allow site analytics and advertising or ad measurement with our partners.",
    audience: "Site analytics", advertising: "Advertising and ad measurement", accept: "Accept all", decline: "Reject all",
    customize: "Customize", save: "Save my choices", close: "Close", policy: "Privacy policy",
  },
  ar: {
    title: "الخصوصية", settings: "تفضيلات الخصوصية",
    explanation: "يمكنك اختيار السماح بقياس زيارات الموقع وعرض الإعلانات أو قياسها مع شركائنا.",
    audience: "قياس زيارات الموقع", advertising: "الإعلانات وقياسها", accept: "قبول الكل", decline: "رفض الكل",
    customize: "تخصيص", save: "حفظ اختياراتي", close: "إغلاق", policy: "سياسة الخصوصية",
  },
};

const PrivacyContext = createContext({ advertising: false, openSettings: () => {}, locale: "fr" as Locale });

export function useAdvertisingConsent() {
  return useContext(PrivacyContext).advertising;
}

export function PrivacySettingsButton() {
  const { openSettings, locale } = useContext(PrivacyContext);
  return <button data-no-track type="button" className="cursor-pointer text-start underline-offset-4 hover:underline" onClick={openSettings}>{copy[locale].settings}</button>;
}

function readChoice(): TrackingPreferences | null {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (typeof stored?.audience === "boolean" && typeof stored.advertising === "boolean" &&
        Number.isFinite(stored.expiresAt) && stored.expiresAt > Date.now()) {
      return { audience: stored.audience, advertising: stored.advertising };
    }
  } catch {
    // The visitor can still choose when storage is unavailable.
  }
  return null;
}

function GoogleAds() {
  useEffect(() => {
    if (document.getElementById("portfolio-google-ads")) return;
    const browser = window as typeof window & { dataLayer?: unknown[] };
    const queue = (browser.dataLayer ??= []);
    // eslint-disable-next-line prefer-rest-params -- The Google tag queue uses the gtag arguments object.
    const gtag = function (..._args: unknown[]) { queue.push(arguments); };
    gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
    gtag("consent", "update", { ad_storage: "granted", ad_user_data: "granted" });
    gtag("js", new Date());
    gtag("config", GOOGLE_ADS_ID);
    const script = document.createElement("script");
    script.id = "portfolio-google-ads";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    script.async = true;
    document.head.append(script);
  }, []);
  return null;
}

export default function SitePrivacy({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  const path = usePathname();
  const admin = /^\/admin(?:\/|$)/.test(path ?? "");
  const [loaded, setLoaded] = useState(false);
  const [choice, setChoice] = useState<TrackingPreferences | null>(null);
  const [editing, setEditing] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [draft, setDraft] = useState(declined);
  const activeChoice = useRef<TrackingPreferences>(declined);
  const settingsHeading = useRef<HTMLHeadingElement>(null);
  const settingsTrigger = useRef<HTMLElement | null>(null);
  const t = copy[locale];

  useEffect(() => {
    if (admin) {
      if (activeChoice.current.advertising) window.location.reload();
      return;
    }
    const sync = () => {
      const next = readChoice();
      const previous = activeChoice.current;
      activeChoice.current = next ?? declined;
      if (previous.audience && !next?.audience) clearAnalyticsSession();
      setChoice(next);
      setLoaded(true);
      if (previous.advertising && !next?.advertising) window.location.reload();
    };
    sync();
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) sync();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("pageshow", sync);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("pageshow", sync);
    };
  }, [admin]);

  useEffect(() => {
    if (editing) settingsHeading.current?.focus();
  }, [editing]);

  const closeSettings = () => {
    setEditing(false);
    settingsTrigger.current?.focus();
    settingsTrigger.current = null;
  };

  const save = (next: TrackingPreferences) => {
    const previous = activeChoice.current;
    activeChoice.current = next;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, expiresAt: Date.now() + CHOICE_DURATION_MS }));
    } catch {
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* Storage is unavailable. */ }
    }
    if (!next.audience) clearAnalyticsSession();
    setChoice(next);
    closeSettings();
    setCustomizing(false);
    // A reload stops an advertising script already running in this document.
    if (previous.advertising && !next.advertising) window.location.reload();
  };

  const openSettings = () => {
    settingsTrigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setDraft(choice ?? declined);
    setEditing(true);
    setCustomizing(true);
  };

  const preferences = admin ? declined : choice ?? declined;
  const choiceButton = "rounded-full border border-white/35 px-4 py-2 text-sm font-semibold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-primary";

  return <PrivacyContext.Provider value={{ advertising: preferences.advertising, openSettings, locale }}>
    {children}
    {preferences.advertising && <GoogleAds />}
    {(preferences.audience || preferences.advertising) && <Analytics {...preferences} activeChoice={activeChoice} />}
    {!admin && loaded && (!choice || editing) && (
      <section data-no-track aria-labelledby="privacy-title" className="fixed inset-x-3 bottom-3 z-[100] max-h-[calc(100dvh-1.5rem)] max-w-lg overflow-y-auto rounded-2xl border border-white/25 bg-[#242424] p-4 text-white shadow-xl sm:start-auto sm:p-5">
        <h2 ref={settingsHeading} tabIndex={-1} id="privacy-title" className="text-lg font-semibold">{t.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{t.explanation}</p>
        <Link href="/politique-confidentialite" className="mt-2 inline-block text-sm text-white/85 underline">{t.policy}</Link>
        {customizing && (
          <div className="mt-4 grid gap-2 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" checked={draft.audience} onChange={e => setDraft({ ...draft, audience: e.target.checked })} />{t.audience}</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={draft.advertising} onChange={e => setDraft({ ...draft, advertising: e.target.checked })} />{t.advertising}</label>
          </div>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button type="button" className={choiceButton} onClick={() => save(declined)}>{t.decline}</button>
          <button type="button" className={choiceButton} onClick={() => save(accepted)}>{t.accept}</button>
          {customizing ? <button type="button" className={choiceButton} onClick={() => save(draft)}>{t.save}</button> :
            <button type="button" className={choiceButton} onClick={() => setCustomizing(true)}>{t.customize}</button>}
          {editing && choice && <button type="button" className={choiceButton} onClick={closeSettings}>{t.close}</button>}
        </div>
      </section>
    )}
  </PrivacyContext.Provider>;
}
