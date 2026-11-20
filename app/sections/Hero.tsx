"use client";

import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";
import { pageCopy } from "../i18n/page-copy";

const copy = {
  fr: { title: "Développeur web & mobile freelance", portfolio: "Portfolio", work: "Voir mes réalisations", contact: "Parlons de votre projet", home: "Accueil", services: "Services", about: "À propos", skills: "Compétences", experience: "Parcours", testimonials: "Avis clients", hobbies: "Loisirs", guides: "Guides", market: "France, Canada & International", name: "Soufiane Boutatss" },
  en: { title: "Freelance web & mobile developer", portfolio: "Portfolio", work: "Explore my work", contact: "Let's talk about your project", home: "Home", services: "Services", about: "About", skills: "Skills", experience: "Experience", testimonials: "Testimonials", hobbies: "Interests", guides: "Guides", market: "France, Canada & Worldwide", name: "Soufiane Boutatss" },
  ar: { title: "مطور مواقع وتطبيقات مستقل", portfolio: "أعمالي", work: "شاهد أعمالي", contact: "لنتحدث عن مشروعك", home: "الرئيسية", services: "خدماتي", about: "نبذة عني", skills: "المهارات", experience: "الخبرة", testimonials: "آراء العملاء", hobbies: "الهوايات", guides: "مقالات", market: "المغرب، فرنسا، كندا والعالم", name: "سفيان بوطاطس" },
};

export default function Hero() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const links = [{ href: "#home", label: t.home }, { href: "#skills", label: t.skills }, { href: "#experiences", label: t.experience }, { href: "#testimonials", label: t.testimonials }, { href: "#hobbies", label: t.hobbies }, { href: "/blog", label: t.guides }, { href: "#contact", label: t.contact }];
  return <section id="home" className="fpl-home">
    <div className="fpl-masthead">
      <div className="fpl-masthead-copy"><p className="fpl-masthead-title"><span className="fpl-masthead-symbol" aria-hidden="true">sb.</span>{t.portfolio}</p><p className="fpl-masthead-name">{t.name} · Web & Mobile</p></div>
      <div className="fpl-masthead-art" aria-hidden="true"><span>React</span><span>Next.js</span><span>Laravel</span><span>PHP</span></div>
      <nav className="fpl-product-tabs" aria-label={t.portfolio}><a href="#portfolio" aria-current="location">{t.portfolio}</a><a href="#services">{t.services}</a><a href="#about">{t.about}</a></nav>
    </div>
    <nav className="fpl-sub-navigation" aria-label={locale === "fr" ? "Explorer le portfolio" : locale === "ar" ? "تصفح الموقع" : "Explore the portfolio"}>{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <div className="container fpl-welcome-wrap">
      <div className="fpl-welcome-card">
        <div className="fpl-welcome-copy"><p className="fpl-welcome-name">{t.name}</p><h1>{t.title}</h1><p>{pageCopy[locale].intro}</p><div className="fpl-welcome-actions"><a className="btn-secondary" href="#contact">{t.contact}</a><a className="btn-primary" href="#portfolio">{t.work}</a></div></div>
        <div className="fpl-welcome-visual"><div className="fpl-ribbon" aria-hidden="true"/><Image src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png" alt={t.name} fill priority sizes="(max-width: 599px) 80vw, 36vw" className="fpl-welcome-portrait" /><span className="fpl-welcome-caption">{t.market}</span></div>
      </div>
    </div>
  </section>;
}
