"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Smartphone, Server, Palette, Monitor, Zap, type LucideIcon } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS: Record<string, LucideIcon> = { Globe, Smartphone, Server, Palette, Monitor, Zap };

const Services = () => {
  const { t, locale } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isRtl = locale === "ar";

  return (
    <section
      id="services"
      className="relative py-32 bg-black overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
      aria-label="Services"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b00]/[0.03] to-transparent pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle">{t.services.tag}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            {t.services.title}{" "}
            <span className="text-gradient">{t.services.titleGradient}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative glass-card p-8 rounded-3xl border border-white/5 hover:border-[#ff6b00]/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6b00]/0 to-transparent group-hover:from-[#ff6b00]/5 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff6b00]/20 transition-colors duration-300">
                    {Icon && <Icon className="w-7 h-7 text-[#ff6b00]" />}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-medium text-white/60 border border-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary inline-flex">
            {t.services.cta}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Services;
