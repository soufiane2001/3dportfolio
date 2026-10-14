import type { Locale } from "../i18n/translations";

const languages = [{ code: "fr", name: "Français" }, { code: "en", name: "English" }, { code: "ar", name: "العربية" }] as const;

export default function LanguageLinks({ locale = "fr" }: { locale?: Locale }) {
  return <nav aria-label="Languages" className="language-links" dir="ltr">
    {languages.map(language => <a key={language.code} href={`/${language.code}`} hrefLang={language.code} lang={language.code} aria-label={language.name} title={language.name} aria-current={locale === language.code ? "page" : undefined} className="language-link">{language.code.toUpperCase()}</a>)}
  </nav>;
}
