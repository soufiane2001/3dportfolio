"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";

const Experience = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const experiences = t.experience.items;

  return (
    <section id="experiences" className="relative py-32 bg-black overflow-hidden" aria-label="Expérience professionnelle de Soufiane Boutatss">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#ff6b00]/30 to-transparent" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle">{t.experience.tag}</p>
          <h2 className="section-title text-white">
            {t.experience.title} <span className="text-gradient">{t.experience.titleGradient}</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />

              <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                <div className="timeline-dot" />
              </div>

              <div className="flex-1 md:max-w-[calc(50%-2rem)]">
                <div className="glass-card glass-card-hover p-8 ml-8 md:ml-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-bold text-[#ff6b00] bg-[#ff6b00]/10 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#ff6b00] font-medium mb-4">{exp.company}</p>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/60 text-sm"
                      >
                        <span className="text-[#ff6b00] mt-1">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AdBanner />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Experience;