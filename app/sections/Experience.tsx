"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";
import AdBanner from "../components/AdBanner";

export default function Experience() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const reduceMotion = useReducedMotion();
  const experiences = t.experience.items;
  return <section id="experiences" className="okc-section" aria-label="Expérience professionnelle de Soufiane Boutatss">
    <div className="container" ref={ref}>
      <div className="okc-section-intro"><p className="section-subtitle">{t.experience.tag}</p><h2 className="section-heading">{t.experience.title} <span>{t.experience.titleGradient}</span></h2></div>
      <div>{experiences.map((exp, index) => <motion.article key={index} className="okc-experience-row" initial={false} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : index * .1 }}>
        <p className="okc-experience-period">{exp.period}</p>
        <div className="okc-experience-role"><h3>{exp.title}</h3><p>{exp.company}</p></div>
        <ul className="okc-experience-description">{exp.description.map((item, i) => <li key={i} className="body-copy"><span aria-hidden="true">→</span>{item}</li>)}</ul>
      </motion.article>)}</div>
      <AdBanner />
    </div>
  </section>;
}
