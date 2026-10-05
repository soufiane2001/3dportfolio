"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Globe, Monitor, Palette, Server, Smartphone, Zap, type LucideIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS: Record<string, LucideIcon> = { Globe, Smartphone, Server, Palette, Monitor, Zap };

export default function Services() {
  const { t, locale } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const reduceMotion = useReducedMotion();
  const isRtl = locale === "ar";

  return (
    <section id="services" className="relative overflow-hidden bg-black section-padding" dir={isRtl ? "rtl" : "ltr"} aria-label="Services">
      <div className="container relative z-10" ref={ref}>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <motion.header initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .6 }} className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.28em] text-[#ff6b00]">{t.services.tag}</p>
            <h2 className="mb-6 section-heading text-white">
              {t.services.title}<br /><span className="text-white/65">{t.services.titleGradient}</span>
            </h2>
            <p className="mb-8 max-w-md body-copy">{t.services.subtitle}</p>
            <a href="#contact" className="group inline-flex items-center gap-3 border-b border-[#ff6b00] pb-2 text-sm font-bold uppercase tracking-[.12em] text-white transition hover:text-[#ff6b00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b00]">
              {t.services.cta}<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.header>

          <div className="border-t border-white/15">
            {t.services.items.map((service, index) => {
              const Icon = ICONS[service.icon];
              return <motion.article key={service.title} initial={{ opacity: 0, x: isRtl ? 24 : -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .55, delay: reduceMotion ? 0 : index * .07 }} className="group grid gap-5 border-b border-white/15 py-7 transition-colors hover:border-[#ff6b00]/60 sm:grid-cols-[4rem_1fr] sm:py-9">
                <div className="flex items-start justify-between sm:block">
                  <span className="text-xs font-semibold tracking-[.18em] text-white/30">0{index + 1}</span>
                  <div className="mt-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#ff6b00] transition group-hover:border-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-white sm:mt-5">{Icon && <Icon size={20} strokeWidth={1.7} />}</div>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white transition group-hover:translate-x-1">{service.title}</h3>
                  <p className="mb-5 max-w-[60ch] body-copy">{service.description}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">{service.tags.map((tag) => <span key={tag} className="text-xs font-semibold uppercase tracking-[.08em] text-white/65 transition group-hover:text-white/60">{tag}</span>)}</div>
                </div>
              </motion.article>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
