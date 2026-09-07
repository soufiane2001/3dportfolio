"use client";
import { createContext, useContext } from "react";
import { Locale, translations } from "./translations";
const LanguageContext = createContext({ locale: "fr" as Locale, t: translations.fr as unknown as typeof translations.en, dir: "ltr" as "ltr" | "rtl" });
export function LanguageProvider({ children, locale = "fr" }: { children: React.ReactNode; locale?: Locale }) {
  return <LanguageContext.Provider value={{ locale, t: translations[locale] as unknown as typeof translations.en, dir: locale === "ar" ? "rtl" : "ltr" }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
