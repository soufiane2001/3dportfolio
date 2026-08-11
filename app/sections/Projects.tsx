"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Play, X } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../i18n/LanguageContext";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  tech: string[];
}

const projects: Project[] = [
  { id: 1, title: "BDM Store", description: "Plateforme e-commerce complète pensée pour convertir, avec paiement à la livraison.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369049/Capture_d_%C3%A9cran_2026-05-10_022349_pn3hp8.png", demoUrl: "https://bdmstore.store/ecom/index.php", tech: ["PHP", "CSS", "MySQL"] },
  { id: 2, title: "Reby Art", description: "Un portfolio sobre et immersif qui laisse toute la place au travail de l’artiste.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369125/Capture_d_%C3%A9cran_2026-05-10_022508_ecupwg.png", demoUrl: "https://rebyart.vercel.app/", repoUrl: "https://github.com/soufiane2001/rebyart", tech: ["React", "JavaScript"] },
  { id: 3, title: "HighUp Counselling", description: "Une présence digitale rassurante et accessible pour un cabinet de psychologie.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369183/Capture_d_%C3%A9cran_2026-05-10_022608_m8mer3.png", demoUrl: "https://www.highupcounselling.ca/", tech: ["Wix"] },
  { id: 4, title: "Cash Management", description: "Application mobile claire et rapide pour suivre ses dépenses au quotidien.", image: "/cash-management-app.svg", videoUrl: "https://www.youtube.com/embed/F3Pjh49qdzE?si=0fTnYNxOnF-oEWd8", repoUrl: "https://github.com/soufiane2001/cashappv4", tech: ["React Native", "Firebase"] },
  { id: 5, title: "Patient Management", description: "Outil desktop centralisant le suivi et la gestion des dossiers patients.", image: "/patient-management-app.svg", videoUrl: "https://www.youtube.com/embed/FiacG53K6fs?si=3VGAVs-gx6k6hi1_", tech: ["Electron.js"] },
  { id: 6, title: "Horea Formation", description: "Site institutionnel structuré pour présenter les programmes et générer des contacts.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369246/Capture_d_%C3%A9cran_2026-05-10_022707_yrmkgs.png", demoUrl: "https://www.horea-formation.com/", tech: ["WordPress"] },
  { id: 7, title: "Dar Mooris", description: "Vitrine digitale raffinée pour une maison textile marocaine.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1774035266/Capture_d_%C3%A9cran_2026-03-20_213032_ksgiwn.png", demoUrl: "https://darmooris.ma/", tech: ["PHP"] },
  { id: 8, title: "Gamlastan", description: "Expérience shopping moderne, fluide et pensée pour tous les écrans.", image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1775161310/Capture_d_%C3%A9cran_2026-04-02_231851_senzhp.png", demoUrl: "https://gamlastanshop.space/", tech: ["Next.js"] },
  { id: 9, title: "Dr Boutatss Nora", description: "Site médical clair et rassurant pour présenter l’expertise du cabinet et faciliter la prise de rendez-vous.", image: "/project-dr-boutatss-nora.png", demoUrl: "https://www.drboutatssnora.com/", tech: ["Site vitrine", "Responsive", "SEO local"] },
  { id: 10, title: "Pizza Napoli Toul", description: "Une vitrine gourmande et chaleureuse avec menu, horaires et informations pratiques immédiatement accessibles.", image: "/project-pizza-napoli-toul.png", demoUrl: "https://pizzanapoli-toul.fr/", tech: ["Web design", "Responsive", "SEO local"] },
];

export default function Projects() {
  const { t, locale } = useLanguage();
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const reduceMotion = useReducedMotion();
  const isRtl = locale === "ar";

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 lg:py-36" dir={isRtl ? "rtl" : "ltr"} aria-label="Projets et réalisations">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="container relative z-10" ref={ref}>
        <div className="mb-12 grid items-end gap-8 border-b border-white/10 pb-8 md:grid-cols-[1fr_auto] md:mb-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .6 }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-[#ff6b00]">{t.projects.tag} / 2026</p>
            <h2 className="max-w-3xl text-4xl font-black leading-[.98] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              {t.projects.title} <span className="text-white/35">{t.projects.titleGradient}</span>
            </h2>
          </motion.div>
          <p className="max-w-sm text-sm leading-7 text-white/50 md:text-right">Une sélection de produits digitaux conçus pour être beaux, utiles et efficaces.</p>
        </div>

        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {projects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduceMotion ? 0 : .55, delay: reduceMotion ? 0 : Math.min(index * .06, .3) }} className={index === 0 || index === 5 ? "md:col-span-2" : ""}>
              <div className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0b0b0b]">
                <div className={`relative overflow-hidden ${index === 0 || index === 5 ? "aspect-[16/10] sm:aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <Image src={project.image} alt={`Aperçu du projet ${project.title}`} fill sizes={index === 0 || index === 5 ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 45vw"} className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
                  <div className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 px-3 text-xs font-bold text-white backdrop-blur-md sm:left-6 sm:top-6">0{index + 1}</div>
                  {(project.demoUrl || project.videoUrl) && <a href={project.demoUrl || "#"} onClick={project.videoUrl ? (e) => { e.preventDefault(); setVideoModal(project.videoUrl!); } : undefined} target={project.demoUrl ? "_blank" : undefined} rel="noopener noreferrer" aria-label={`${project.demoUrl ? t.projects.demo : t.projects.video} — ${project.title}`} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-[#ff6b00] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b00] sm:right-6 sm:top-6">
                    {project.videoUrl ? <Play size={17} fill="currentColor" /> : <ArrowUpRight size={19} />}
                  </a>}
                </div>
                <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
                    <p className="max-w-xl text-sm leading-6 text-white/55 sm:text-base">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                    {project.tech.map((tech) => <span key={tech} className="border-b border-white/20 px-1 py-1 text-[11px] font-semibold uppercase tracking-[.14em] text-white/55">{tech}</span>)}
                    {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.code} — ${project.title}`} className="ml-1 rounded-full border border-white/15 p-2 text-white/65 transition hover:border-[#ff6b00] hover:text-[#ff6b00] focus-visible:outline-2 focus-visible:outline-[#ff6b00]"><Github size={16} /></a>}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>{videoModal && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] grid place-items-center bg-black/95 p-4 backdrop-blur-sm" onClick={() => setVideoModal(null)} role="dialog" aria-modal="true" aria-label={t.projects.video}>
        <motion.div initial={{ scale: reduceMotion ? 1 : .96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: reduceMotion ? 1 : .96, opacity: 0 }} className="relative aspect-video w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setVideoModal(null)} className="absolute -top-12 right-0 rounded-full p-2 text-white transition hover:text-[#ff6b00] focus-visible:outline-2 focus-visible:outline-[#ff6b00]" aria-label="Fermer"><X size={28} /></button>
          <iframe src={videoModal} title={t.projects.video} className="h-full w-full rounded-xl border border-white/10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </motion.div>
      </motion.div>}</AnimatePresence>
    </section>
  );
}
