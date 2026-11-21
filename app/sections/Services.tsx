"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const serviceGroups = [
  { items: [0, 3], image: "/project-dr-boutatss-nora.png", project: "Dr Boutatss Nora" },
  { items: [2, 5], image: "/project-mirado-clothing.jpg", project: "Mirado Clothing" },
  { items: [1, 4], image: "/patient-management-app.svg", project: "Patient Management" },
];

export default function Services() {
  const { t, locale } = useLanguage();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const copy = {
    fr: { title: "À chaque projet,", accent: "sa solution.", intro: "Un site pour votre activité. Une boutique pour vos produits. Une application pour votre métier.", tabs: ["Sites web", "Boutiques en ligne", "Applications"], example: "Exemple de réalisation", contact: "Parlons de votre projet" },
    en: { title: "The right solution.", accent: "For your project.", intro: "A website for your business. A store for your products. An application for the way you work.", tabs: ["Websites", "Online stores", "Applications"], example: "From my portfolio", contact: "Let's talk about your project" },
    ar: { title: "لكل مشروع،", accent: "حل يناسبه.", intro: "موقع لنشاطك. متجر لمنتجاتك. تطبيق لطريقة عملك.", tabs: ["مواقع الويب", "متاجر إلكترونية", "تطبيقات"], example: "مثال من أعمالي", contact: "لنتحدث عن مشروعك" },
  }[locale];
  return <section id="services" className="okc-section mix-solutions" aria-labelledby="solutions-heading"><div className="container">
    <header className="mix-centered-heading"><h2 id="solutions-heading">{copy.title}<br /><span>{copy.accent}</span></h2><p className="body-copy">{copy.intro}</p></header>
    <div className="mix-solution-tabs" role="tablist" aria-label={t.nav.services}>{copy.tabs.map((label,index) => <button key={label} ref={el => { tabs.current[index] = el; }} id={`solution-tab-${index}`} type="button" role="tab" aria-selected={active===index} aria-controls={`solution-panel-${index}`} tabIndex={active===index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
      const step = event.key === "ArrowRight" ? (locale === "ar" ? -1 : 1) : event.key === "ArrowLeft" ? (locale === "ar" ? 1 : -1) : 0;
      const next = event.key === "Home" ? 0 : event.key === "End" ? 2 : step ? (index + step + 3) % 3 : null;
      if (next !== null) { event.preventDefault(); setActive(next); tabs.current[next]?.focus(); }
    }}>{label}</button>)}</div>
    {serviceGroups.map((group,index) => <div key={group.project} id={`solution-panel-${index}`} role="tabpanel" aria-labelledby={`solution-tab-${index}`} hidden={active!==index} className="mix-solution-panel">
      <figure className="mix-solution-visual"><div className="mix-solution-window"><div className="mix-window-title"><i/><i/><i/><span>{group.project}</span></div><div className="mix-solution-screen"><Image src={group.image} alt={group.project} fill sizes="(max-width: 767px) 95vw, 50vw" /></div></div><figcaption>{copy.example} · {group.project}</figcaption></figure>
      <div className="mix-solution-copy">{group.items.map(item => <article key={item}><h3>{t.services.items[item].title}</h3><p className="body-copy">{t.services.items[item].description}</p><p className="mix-service-tags">{t.services.items[item].tags.join(" · ")}</p></article>)}<a href="#contact" className="btn-primary">{copy.contact}</a></div>
    </div>)}
  </div></section>;
}
