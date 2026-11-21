"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const copy = {
  fr: { title: "Développeur web & mobile freelance", intro: "Des sites, des boutiques et des applications sur mesure. Un interlocuteur direct, de votre première idée à la mise en ligne.", contact: "Parlons de votre projet", work: "Voir mes réalisations", discover: "Découvrir le projet", presentation: "Présentation", applications: "Applications", eyebrow: "Soufiane Boutatss · Web & Mobile", market: "France, Canada & International", mirado: "Mirado Clothing. La mode se vit aussi en ligne.", miradoIntro: "Catalogue, fiches produits et commandes sur mobile : une boutique PHP et MySQL pensée pour le quotidien de la marque.", apps: "Des applications au service de vos usages.", appsIntro: "Du suivi des dépenses à la gestion des patients, des interfaces adaptées aux besoins du projet sur mobile et ordinateur.", mobile: "Application mobile", desktop: "Application desktop", pause: "Mettre le diaporama en pause", play: "Reprendre le diaporama", show: "Afficher" },
  en: { title: "Freelance web & mobile developer", intro: "Custom websites, online stores and applications. Work directly with one developer, from your first idea to launch.", contact: "Let's talk about your project", work: "Explore my work", discover: "Explore the project", presentation: "Overview", applications: "Applications", eyebrow: "Soufiane Boutatss · Web & Mobile", market: "France, Canada & Worldwide", mirado: "Mirado Clothing. Bringing style online.", miradoIntro: "A PHP and MySQL clothing store with a product catalogue, product pages and mobile ordering.", apps: "Applications built around everyday needs.", appsIntro: "From tracking expenses to managing patient records, interfaces built for each project's mobile and desktop needs.", mobile: "Mobile application", desktop: "Desktop application", pause: "Pause slideshow", play: "Resume slideshow", show: "Show" },
  ar: { title: "مطور مواقع وتطبيقات مستقل", intro: "مواقع ومتاجر وتطبيقات حسب الطلب. تواصل مباشر مع مطور واحد من فكرتك الأولى إلى إطلاق المشروع.", contact: "لنتحدث عن مشروعك", work: "شاهد أعمالي", discover: "اكتشف المشروع", presentation: "نبذة", applications: "تطبيقات", eyebrow: "سفيان بوطاطس · مواقع وتطبيقات", market: "المغرب، فرنسا، كندا والعالم", mirado: "ميرادو. الأناقة على الإنترنت.", miradoIntro: "متجر ملابس باستخدام PHP وMySQL مع كتالوج وصفحات المنتجات وطلبات عبر الهاتف.", apps: "تطبيقات تناسب احتياجاتك اليومية.", appsIntro: "من تتبع المصاريف إلى إدارة ملفات المرضى، واجهات تناسب احتياجات كل مشروع على الهاتف والحاسوب.", mobile: "تطبيق للهاتف", desktop: "تطبيق للحاسوب", pause: "إيقاف العرض التلقائي", play: "استئناف العرض التلقائي", show: "عرض" },
};

export default function Hero() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const touchStart = useRef<number | null>(null);
  const slides = [
    { title: t.title, description: t.intro, label: t.eyebrow, short: t.presentation, href: "#contact", cta: t.contact, image: "/project-mirado-clothing.jpg", screen: "miradoclothing.com", secondImage: "/patient-management-app.svg", secondScreen: "Patient Management" },
    { title: t.mirado, description: t.miradoIntro, label: "Mirado Clothing · PHP / MySQL", short: "Mirado Clothing", href: "/portfolio/mirado-clothing", cta: t.discover, image: "/project-mirado-clothing.jpg", screen: "miradoclothing.com", secondImage: "", secondScreen: "" },
    { title: t.apps, description: t.appsIntro, label: "React Native · Electron.js", short: t.applications, href: "/portfolio/cash-management-app", cta: t.discover, image: "/cash-management-app.svg", screen: `Cash Management · ${t.mobile}`, secondImage: "/patient-management-app.svg", secondScreen: `Patient Management · ${t.desktop}` },
  ];
  const running = !paused && !reduceMotion;
  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (!running || hovered || !visible) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % 3), 8000);
    return () => window.clearInterval(timer);
  }, [running, hovered, visible, active]);

  return <section id="home" className={`mix-hero ${active === 0 ? "is-light" : "is-dark"}`} aria-roledescription="carousel" aria-label={locale === "fr" ? "À la une" : locale === "ar" ? "في الواجهة" : "Featured work"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setPaused(true)} onTouchStart={event => { touchStart.current = event.changedTouches[0].clientX; }} onTouchEnd={event => {
    if (touchStart.current === null) return;
    const delta = (touchStart.current - event.changedTouches[0].clientX) * (locale === "ar" ? -1 : 1);
    if (Math.abs(delta) > 60) { setActive(index => (index + (delta > 0 ? 1 : 2)) % 3); setPaused(true); }
    touchStart.current = null;
  }}>
    {slides.map((slide,index) => <div key={slide.short} className={`mix-hero-slide mix-slide-${index} ${active === index ? "is-active" : ""}`} aria-hidden={active !== index} inert={active !== index}>
      <div className="container mix-hero-layout"><div className="mix-hero-copy"><p className="mix-eyebrow">{slide.label}</p>{index === 0 ? <h1><strong>{locale === "fr" ? "Développeur web" : locale === "ar" ? "مطور مواقع" : "Web developer"}</strong><span>{locale === "fr" ? "& mobile freelance." : locale === "ar" ? "وتطبيقات مستقل." : "& mobile freelance."}</span></h1> : <h2>{slide.title}</h2>}<p className="mix-hero-description">{slide.description}</p><div className="mix-hero-actions"><Link className="btn-primary" href={slide.href}>{slide.cta}</Link><a className="btn-secondary" href="#portfolio">{t.work}</a></div><p className="mix-hero-market">{t.market}</p></div>
      <div className={`mix-hero-visual ${slide.secondImage ? "has-second" : ""}`}><div className="mix-device-backdrop" aria-hidden="true"/><div className="mix-device-main"><div className="mix-browser-bar"><span className="mix-browser-dots" aria-hidden="true"><i/><i/><i/></span><span>{slide.screen}</span></div><div className="mix-device-screen"><Image src={slide.image} alt={slide.screen} fill priority={index===0} sizes="(max-width: 767px) 90vw, 45vw" /></div><div className="mix-laptop-base" aria-hidden="true"/></div>{slide.secondImage && <div className="mix-device-secondary"><div className="mix-browser-bar"><span>{slide.secondScreen}</span></div><div className="mix-device-screen"><Image src={slide.secondImage} alt={slide.secondScreen} fill sizes="(max-width: 767px) 52vw, 24vw" /></div></div>}</div></div>
    </div>)}
    <div className="container mix-hero-controls"><div className="mix-slide-tabs">{slides.map((slide,index) => <button type="button" key={slide.short} onClick={() => { setActive(index); setPaused(true); }} aria-label={`${t.show} ${slide.short}`} aria-current={index===active ? "true" : undefined}><span className="mix-slide-bar"/><span className="sr-only">{slide.short}</span></button>)}</div><button type="button" className="mix-pause" aria-label={running ? t.pause : t.play} disabled={!!reduceMotion} onClick={() => setPaused(value => !value)}>{running ? <Pause size={16}/> : <Play size={16}/>}</button></div>
  </section>;
}
