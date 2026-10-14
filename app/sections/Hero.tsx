"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { pageCopy } from "../i18n/page-copy";

const heroCopy = {
  fr: { title: "Développeur Web Freelance", market: "France, Canada & International", name: "Soufiane Boutatss — développement web sur mesure", quote: "Demander un devis", work: "Voir mes réalisations" },
  en: { title: "Freelance Web Developer", market: "France, Canada & Worldwide", name: "Soufiane Boutatss — custom web development", quote: "Request a quote", work: "Explore my work" },
  ar: { title: "مطور مواقع مستقل", market: "المغرب، فرنسا، كندا والعالم", name: "سفيان بوطاطس — تطوير مواقع حسب الطلب", quote: "اطلب عرض سعر", work: "شاهد أعمالي" },
};

export default function Hero() {
  const { t, locale } = useLanguage();
  const copy = heroCopy[locale];
  const words = copy.title.split(" ");
  const firstLine = words.slice(0, locale === "ar" ? 2 : 1).join(" ");
  const secondLine = words.slice(locale === "ar" ? 2 : 1).join(" ");

  return <section id="home" className="okc-hero">
    <div className="okc-hero-orbit" aria-hidden="true" />
    <div className="container">
      <p className="okc-hero-eyebrow">{t.hero.tag}</p>
      <h1 className="okc-hero-title" aria-label={copy.title}>
        <span className="okc-hero-line">{locale === "ar" ? firstLine : <>{firstLine.slice(0, -3)}<span className="okc-hero-accent">{firstLine.slice(-3)}</span></>}</span>{" "}
        <span className="okc-hero-line">{secondLine}</span>
      </h1>
      <div className="okc-hero-bottom">
        <div>
          <p className="okc-hero-market">{copy.market}</p>
          <div className="okc-hero-profile">
            <div className="okc-hero-portrait"><Image src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png" alt="Soufiane Boutatss - Web & Mobile Developer" fill priority sizes="56px" className="object-cover" /></div>
            <p>{copy.name}</p>
          </div>
          <div className="okc-socials">{[
            { href: "https://github.com/soufiane2001", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://web.facebook.com/soufianski2001", icon: Facebook, label: "Facebook" },
          ].map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}><social.icon size={18} /></a>)}</div>
        </div>
        <div className="okc-hero-description">
          <p className="body-copy">{pageCopy[locale].intro}</p>
          <div className="okc-hero-buttons"><a href="#contact" className="btn-primary">{copy.quote}</a><a href="#portfolio" className="okc-text-link">{copy.work}<ArrowUpRight size={16} /></a></div>
        </div>
      </div>
      <a href="#about" className="okc-hero-scroll">{t.hero.scroll}<ArrowDown size={16} /></a>
    </div>
  </section>;
}
