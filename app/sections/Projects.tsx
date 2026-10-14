"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Play, X } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";

interface Project {
  id: number;
  caseStudySlug: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  tech: string[];
}

const projects: Project[] = [
  { id: 1, caseStudySlug: "site-ecommerce", title: "BDM Store", description: "Plateforme e-commerce complète pensée pour convertir, avec paiement à la livraison.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369049/Capture_d_%C3%A9cran_2026-05-10_022349_pn3hp8.png", demoUrl: "https://bdmstore.store/ecom/index.php", tech: ["PHP", "CSS", "MySQL"] },
  { id: 2, caseStudySlug: "reby-art", title: "Reby Art", description: "Un portfolio sobre et immersif qui laisse toute la place au travail de l’artiste.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369125/Capture_d_%C3%A9cran_2026-05-10_022508_ecupwg.png", demoUrl: "https://rebyart.vercel.app/", repoUrl: "https://github.com/soufiane2001/rebyart", tech: ["React", "JavaScript"] },
  { id: 3, caseStudySlug: "highup-counselling", title: "HighUp Counselling", description: "Une présence digitale rassurante et accessible pour un cabinet de psychologie.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369183/Capture_d_%C3%A9cran_2026-05-10_022608_m8mer3.png", demoUrl: "https://www.highupcounselling.ca/", tech: ["Wix"] },
  { id: 4, caseStudySlug: "cash-management-app", title: "Cash Management", description: "Application mobile claire et rapide pour suivre ses dépenses au quotidien.", image: "/cash-management-app.svg", videoUrl: "https://www.youtube.com/embed/F3Pjh49qdzE?si=0fTnYNxOnF-oEWd8", repoUrl: "https://github.com/soufiane2001/cashappv4", tech: ["React Native", "Firebase"] },
  { id: 5, caseStudySlug: "patient-management", title: "Patient Management", description: "Outil desktop centralisant le suivi et la gestion des dossiers patients.", image: "/patient-management-app.svg", videoUrl: "https://www.youtube.com/embed/FiacG53K6fs?si=3VGAVs-gx6k6hi1_", tech: ["Electron.js"] },
  { id: 6, caseStudySlug: "horea-formation", title: "Horea Formation", description: "Site institutionnel structuré pour présenter les programmes et générer des contacts.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369246/Capture_d_%C3%A9cran_2026-05-10_022707_yrmkgs.png", demoUrl: "https://www.horea-formation.com/", tech: ["WordPress"] },
  { id: 7, caseStudySlug: "dar-mooris", title: "Dar Mooris", description: "Vitrine digitale raffinée pour une maison textile marocaine.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1774035266/Capture_d_%C3%A9cran_2026-03-20_213032_ksgiwn.png", demoUrl: "https://darmooris.ma/", tech: ["PHP"] },
  { id: 8, caseStudySlug: "gamlastan", title: "Gamlastan", description: "Expérience shopping moderne, fluide et pensée pour tous les écrans.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1775161310/Capture_d_%C3%A9cran_2026-04-02_231851_senzhp.png", demoUrl: "https://gamlastanshop.space/", tech: ["Next.js"] },
  { id: 9, caseStudySlug: "dr-boutatss-nora", title: "Dr Boutatss Nora", description: "Site médical clair et rassurant pour présenter l’expertise du cabinet et faciliter la prise de rendez-vous.", image: "/project-dr-boutatss-nora.png", demoUrl: "https://www.drboutatssnora.com/", tech: ["Site vitrine", "Responsive", "SEO local"] },
  { id: 10, caseStudySlug: "pizza-napoli-toul", title: "Pizza Napoli Toul", description: "Une vitrine gourmande et chaleureuse avec menu, horaires et informations pratiques immédiatement accessibles.", image: "/project-pizza-napoli-toul.png", demoUrl: "https://pizzanapoli-toul.fr/", tech: ["Web design", "Responsive", "SEO local"] },
];

export default function Projects() {
  const { t, locale } = useLanguage();
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const reduceMotion = useReducedMotion();
  const isRtl = locale === "ar";

  return <section id="portfolio" className="okc-section okc-projects" dir={isRtl ? "rtl" : "ltr"} aria-label="Projets et réalisations">
    <div className="container" ref={ref}>
      <div className="okc-projects-heading">
        <div><p className="section-subtitle">{t.projects.tag} / 2026</p><h2 className="section-heading">{t.projects.title} <span>{t.projects.titleGradient}</span></h2></div>
        <p className="body-copy">Une sélection de produits digitaux conçus pour être beaux, utiles et efficaces.</p>
      </div>
      <div className="okc-project-grid">{projects.map((project, index) => <motion.article key={project.id} className="okc-project" initial={false} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .55, delay: reduceMotion ? 0 : Math.min(index * .06, .3) }}>
        <div className="okc-project-visual">
          <Image src={project.image} alt={`Aperçu du projet ${project.title}`} fill sizes={index % 3 === 2 ? "(max-width: 767px) 100vw, 65vw" : "(max-width: 767px) 100vw, 45vw"} />
          {(project.demoUrl || project.videoUrl) && <a href={project.demoUrl || "#"} onClick={project.videoUrl ? (e) => { e.preventDefault(); setVideoModal(project.videoUrl!); } : undefined} target={project.demoUrl ? "_blank" : undefined} rel="noopener noreferrer" aria-label={`${project.demoUrl ? t.projects.demo : t.projects.video} — ${project.title}`} className="okc-project-action">{project.videoUrl ? <Play size={18} fill="currentColor" /> : <ArrowUpRight size={22} />}</a>}
        </div>
        <div className="okc-project-caption"><h3><Link href={`/portfolio/${project.caseStudySlug}`} prefetch={false}>{project.title}</Link></h3><p>{project.description}</p></div>
        <div className="okc-project-meta"><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{project.tech.map(tech => <span key={tech}>{tech}</span>)}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.code} — ${project.title}`}><Github size={16} /></a>}</div>
        <Link href={`/portfolio/${project.caseStudySlug}`} prefetch={false} className="okc-project-case-link">{locale === "en" ? "Read the case study" : locale === "ar" ? "دراسة المشروع" : "Voir l’étude de cas"} — {project.title}<ArrowUpRight size={14} /></Link>
      </motion.article>)}</div>
    </div>
    <AnimatePresence>{videoModal && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] grid place-items-center bg-background/95 p-4 backdrop-blur-sm" onClick={() => setVideoModal(null)} role="dialog" aria-modal="true" aria-label={t.projects.video}>
      <motion.div initial={{ scale: reduceMotion ? 1 : .96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: reduceMotion ? 1 : .96, opacity: 0 }} className="relative aspect-video w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setVideoModal(null)} className="absolute -top-12 right-0 rounded-full p-2 text-white transition hover:text-primary" aria-label="Fermer"><X size={28} /></button>
        <iframe src={videoModal} title={t.projects.video} className="h-full w-full rounded-xl border border-white/10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </motion.div>
    </motion.div>}</AnimatePresence>
  </section>;
}
