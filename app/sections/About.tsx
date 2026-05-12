"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden" aria-label="À propos de Soufiane Boutatss">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />
      
      <div className="container relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[500px] lg:w-1/2"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b00] via-[#a855f7] to-[#3b82f6] rounded-3xl blur-xl opacity-30" />
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778368246/Gemini_Generated_Image_ac7qxeac7qxeac7q_t0xski.png"
                  alt="Soufiane Boutatss - Full Stack Developer"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 glass-card p-6"
            >
              <div className="text-4xl font-black text-white">6+</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">
                Years Experience
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="section-subtitle">{t.about.tag}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8">
              {t.about.title}
              <br />
              <span className="text-gradient">{t.about.titleGradient}</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {t.about.p1}
            </p>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {t.about.p2}
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-10">
              {[
                { label: t.about.stats.projects, value: "30+" },
                { label: t.about.stats.clients,  value: "34+" },
                { label: t.about.stats.years,    value: "6+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/cv.pdf"
              download
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="btn-primary inline-flex"
            >
              {t.about.cv}
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default About;
