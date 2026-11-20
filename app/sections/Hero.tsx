"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { pageCopy } from "../i18n/page-copy";

const copy = {
  fr: { title: "Développeur web & mobile freelance", label: "À la une", work: "Voir mes réalisations", contact: "Parlons de votre projet", caseStudy: "Découvrir le projet", pause: "Mettre le carrousel en pause", play: "Reprendre le carrousel", select: "Afficher", featured: "Projet à la une", mirado: "Mirado Clothing. Le style prend vie en ligne.", pizza: "Pizza Napoli. Une nouvelle adresse sur le web.", miradoText: "Une boutique de vêtements avec catalogue, fiches produits et commandes sur mobile.", pizzaText: "Un site de restaurant avec sa carte, ses horaires et ses informations pratiques." },
  en: { title: "Freelance web & mobile developer", label: "In the spotlight", work: "Explore my work", contact: "Let's talk about your project", caseStudy: "Explore the project", pause: "Pause carousel", play: "Resume carousel", select: "Show", featured: "Featured project", mirado: "Mirado Clothing. Bringing style online.", pizza: "Pizza Napoli. A new home on the web.", miradoText: "A clothing store with a product catalogue and a mobile shopping experience.", pizzaText: "A restaurant website with its menu, opening hours and practical information." },
  ar: { title: "مطور مواقع وتطبيقات مستقل", label: "في الواجهة", work: "شاهد أعمالي", contact: "لنتحدث عن مشروعك", caseStudy: "اكتشف المشروع", pause: "إيقاف العرض التلقائي", play: "استئناف العرض التلقائي", select: "عرض", featured: "مشروع مميز", mirado: "ميرادو. الأناقة على الإنترنت.", pizza: "بيتزا نابولي. عنوان جديد على الويب.", miradoText: "متجر ملابس مع كتالوج وصفحات المنتجات وطلبات عبر الهاتف.", pizzaText: "موقع مطعم يعرض قائمة الطعام وأوقات العمل والمعلومات العملية." },
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
    { title: t.title, image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778368246/Gemini_Generated_Image_ac7qxeac7qxeac7q_t0xski.png", label: "Soufiane Boutatss", description: pageCopy[locale].intro, href: "#portfolio", cta: t.work, short: locale === "ar" ? "سفيان بوطاطس" : "Soufiane Boutatss" },
    { title: t.mirado, image: "/project-mirado-clothing.jpg", label: `${t.featured} / E-commerce`, description: t.miradoText, href: "/portfolio/mirado-clothing", cta: t.caseStudy, short: "Mirado Clothing" },
    { title: t.pizza, image: "/project-pizza-napoli-toul.png", label: `${t.featured} / Web design`, description: t.pizzaText, href: "/portfolio/pizza-napoli-toul", cta: t.caseStudy, short: "Pizza Napoli Toul" },
  ];
  const running = !paused && !reduceMotion;
  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (!running || hovered || !visible) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % 3), 7000);
    return () => window.clearInterval(timer);
  }, [running, hovered, visible, active]);

  return <>
    <section id="home" className="milan-hero" aria-label={t.label} aria-roledescription="carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setPaused(true)} onTouchStart={event => { touchStart.current = event.changedTouches[0].clientX; }} onTouchEnd={event => {
      if (touchStart.current === null) return;
      const delta = (touchStart.current - event.changedTouches[0].clientX) * (locale === "ar" ? -1 : 1);
      if (Math.abs(delta) > 60) { setActive(index => (index + (delta > 0 ? 1 : 2)) % 3); setPaused(true); }
      touchStart.current = null;
    }}>
      {slides.map((slide, index) => <div key={slide.href} className={`milan-hero-slide milan-hero-slide-${index} ${index === active ? "is-active" : ""}`} aria-hidden={index !== active} inert={index !== active}>
        <div className="milan-hero-image"><Image src={slide.image} alt="" fill priority={index === 0} sizes="100vw" /></div>
        <div className="milan-hero-shade" />
        <div className="container milan-hero-content">
          <p className="milan-hero-label">{slide.label}</p>
          {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
          <p className="milan-hero-description">{slide.description}</p>
          <div className="milan-hero-actions"><Link href={slide.href} className="btn-primary">{slide.cta}</Link>{index === 0 && <a href="#contact" className="milan-hero-contact">{t.contact}</a>}</div>
        </div>
      </div>)}
      <div className="milan-hero-pagination container"><div className="milan-slide-tabs">{slides.map((slide, index) => <button key={slide.short} type="button" onClick={() => { setActive(index); setPaused(true); }} aria-label={`${t.select} ${slide.short}`} aria-current={active === index ? "true" : undefined}><span className="milan-slide-progress" /><span>{slide.short}</span></button>)}</div><button type="button" className="milan-carousel-pause" aria-label={running ? t.pause : t.play} onClick={() => setPaused(value => !value)} disabled={!!reduceMotion}>{running ? <Pause size={16} /> : <Play size={16} />}</button></div>
    </section>
    <div className="milan-intro-strip"><div className="container"><p>{locale === "en" ? "Web. Mobile. Built around your project." : locale === "ar" ? "مواقع وتطبيقات تناسب مشروعك." : "Web. Mobile. Votre projet prend forme."}</p><span>{locale === "en" ? "France, Canada & Worldwide" : locale === "ar" ? "المغرب، فرنسا، كندا والعالم" : "France, Canada & International"}</span><a href="#contact">{t.contact}</a></div></div>
  </>;
}
