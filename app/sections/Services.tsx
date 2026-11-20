"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe, Monitor, Palette, Server, Smartphone, Zap, type LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS: Record<string, LucideIcon> = { Globe, Smartphone, Server, Palette, Monitor, Zap };

export default function Services() {
  const { t, locale } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const reduceMotion = useReducedMotion();
  const isRtl = locale === "ar";

  return <section id="services" className="okc-section" dir={isRtl ? "rtl" : "ltr"} aria-label="Services">
    <div className="container" ref={ref}>
      <motion.header className="okc-section-intro" initial={false} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .6 }}>
        <p className="section-subtitle">{t.services.tag}</p>
        <div><h2 className="section-heading">{t.services.title} <span>{t.services.titleGradient}</span></h2><p className="body-copy">{t.services.subtitle}</p></div>
      </motion.header>
      <div className="okc-services-list">{t.services.items.map(service => {
        const Icon = ICONS[service.icon];
        return <article key={service.title} className="okc-service">
          {Icon && <Icon size={30} className="fpl-service-icon" aria-hidden="true" />}<h3>{service.title}</h3>
          <p className="body-copy">{service.description}</p><div className="okc-service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </article>;
      })}</div><a href="#contact" className="btn-secondary okc-service-cta">{t.services.cta}</a>
    </div>
  </section>;
}
