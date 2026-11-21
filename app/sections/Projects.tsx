"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  { id: 11, caseStudySlug: "mirado-clothing", title: "Mirado Clothing", description: "Boutique de vêtements avec catalogue, fiches produits et commandes sur mobile.", image: "/project-mirado-clothing.jpg", demoUrl: "https://miradoclothing.com/", tech: ["PHP", "MySQL", "E-commerce"] },
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

const categories = {
  fr: ["Tous les projets", "Sites web", "E-commerce", "Applications"],
  en: ["All projects", "Websites", "E-commerce", "Applications"],
  ar: ["كل المشاريع", "مواقع الويب", "متاجر إلكترونية", "تطبيقات"],
};
const categoryFor = (project: Project) => ["mirado-clothing", "site-ecommerce", "dar-mooris", "gamlastan"].includes(project.caseStudySlug) ? 2 : project.videoUrl ? 3 : 1;

export default function Projects() {
  const { t, locale } = useLanguage();
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [category, setCategory] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduceMotion = useReducedMotion();
  const featuredIds = [11, 9, 10, 4];
  const ordered = [...featuredIds.map(id => projects.find(project => project.id === id)!), ...projects.filter(project => !featuredIds.includes(project.id))];
  const filtered = category === 0 ? ordered : ordered.filter(project => categoryFor(project) === category);
  useEffect(() => {
    if (!videoModal) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => { dialog?.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [videoModal]);

  const renderProject = (project: Project, featured = false) => <article key={project.id} className={`okc-project ${featured ? "mix-project-featured" : ""}`}>
    <div className="okc-project-visual"><Link href={`/portfolio/${project.caseStudySlug}`} prefetch={false} tabIndex={-1} aria-hidden="true"><Image src={project.image} alt={`Aperçu du projet ${project.title}`} fill sizes={featured ? "(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 25vw" : "(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 25vw"} /></Link>
      {(project.demoUrl || project.videoUrl) && <a href={project.demoUrl || "#"} onClick={project.videoUrl ? event => { event.preventDefault(); setVideoModal(project.videoUrl!); } : undefined} target={project.demoUrl ? "_blank" : undefined} rel="noopener noreferrer" aria-label={`${project.demoUrl ? t.projects.demo : t.projects.video} — ${project.title}`} className="okc-project-action">{project.videoUrl ? <Play size={18} fill="currentColor" /> : <ExternalLink size={18} />}</a>}
    </div>
    <div className="mix-project-info"><p className="mix-project-category">{categories[locale][categoryFor(project)]}</p><h3><Link href={`/portfolio/${project.caseStudySlug}`} prefetch={false}>{project.title}</Link></h3><p className="mix-project-description">{project.description}</p><div className="okc-project-meta">{project.tech.map(tech => <span key={tech}>{tech}</span>)}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.code} — ${project.title}`}><Github size={16} /></a>}</div><Link href={`/portfolio/${project.caseStudySlug}`} prefetch={false} className="okc-project-case-link">{locale === "en" ? "Read the case study" : locale === "ar" ? "دراسة المشروع" : "Voir l’étude de cas"}</Link></div>
  </article>;

  return <section id="portfolio" className="okc-section okc-projects" aria-labelledby="portfolio-heading">
    <div className="container">
      <div className="mix-project-toolbar"><div className="mix-section-head"><h2 id="portfolio-heading">{locale === "en" ? "Explore my projects" : locale === "ar" ? "اكتشف مشاريعي" : "Découvrez mes réalisations"}</h2><Link href="/portfolio">{locale === "en" ? "Explore the portfolio" : locale === "ar" ? "استكشف المشاريع" : "Tout le portfolio"}</Link></div>
      <div className="mix-filter-tabs" role="group" aria-label={locale === "en" ? "Project categories" : locale === "ar" ? "فئات المشاريع" : "Catégories de projets"}>{categories[locale].map((label, index) => <button type="button" key={label} aria-pressed={category === index} onClick={() => setCategory(index)}>{label}</button>)}</div></div>
      <div aria-live="polite" aria-atomic="false"><div className={`mix-featured-projects count-${Math.min(filtered.length,4)}`}>{filtered.slice(0,4).map(project => renderProject(project,true))}</div>
      {filtered.length > 4 && <div className="mix-more-projects"><h3 className="mix-panel-title">{locale === "en" ? "More from my portfolio" : locale === "ar" ? "المزيد من أعمالي" : "Plus de réalisations"}</h3><div className="mix-news-grid">{filtered.slice(4).map(project => renderProject(project))}</div></div>}</div>
    </div>
    {videoModal && <dialog ref={dialogRef} className="mix-video-dialog" onCancel={() => setVideoModal(null)} onClick={event => { if (event.target === event.currentTarget) setVideoModal(null); }} aria-label={t.projects.video}><button autoFocus type="button" onClick={() => setVideoModal(null)} aria-label={locale === "en" ? "Close video" : locale === "ar" ? "إغلاق الفيديو" : "Fermer la vidéo"}><X size={26} /></button><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : .2 }}><iframe src={videoModal} title={t.projects.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></motion.div></dialog>}
  </section>;
}
