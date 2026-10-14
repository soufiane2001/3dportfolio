"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";

export default function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const reduceMotion = useReducedMotion();
  return <section id="about" className="okc-section" aria-label="À propos de Soufiane Boutatss">
    <div className="container" ref={ref}>
      <div className="okc-about-layout">
        <figure><div className="okc-about-photo"><Image src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778368246/Gemini_Generated_Image_ac7qxeac7qxeac7q_t0xski.png" alt="Soufiane Boutatss - Full Stack Developer" fill sizes="(max-width: 767px) 100vw, 35vw" /></div><figcaption className="okc-about-photo-caption">6+ · Years Experience</figcaption></figure>
        <motion.div className="okc-about-copy" initial={false} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .6 }}>
          <p className="section-subtitle">{t.about.tag}</p><h2 className="section-heading">{t.about.title}<br /><span>{t.about.titleGradient}</span></h2>
          <p className="body-copy">{t.about.p1}</p><p className="body-copy">{t.about.p2}</p>
          <div className="okc-stats">{[{ label: t.about.stats.projects, value: "30+" }, { label: t.about.stats.clients, value: "34+" }, { label: t.about.stats.years, value: "6+" }].map(stat => <div key={stat.label}><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></div>)}</div>
          <a href="/cv.pdf" download className="btn-primary">{t.about.cv}</a>
        </motion.div>
      </div>
      <AdBanner />
    </div>
  </section>;
}
