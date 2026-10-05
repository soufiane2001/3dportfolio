import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { caseStudies } from "../lib/portfolio";
import { pageMetadata } from "../lib/site";

export const metadata: Metadata = pageMetadata("/portfolio", "Portfolio Développeur Web | Sites & Applications", "Découvrez des sites vitrines, e-commerce, applications web, mobiles et logiciels réalisés par Soufiane Boutatss, avec leur contexte et leurs technologies.");

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-black page-shell text-white">
        <div className="container">
          <p className="section-subtitle !text-start">Réalisations</p>
          <h1 className="mt-3 max-w-4xl page-heading">Portfolio web, mobile et applications métier</h1>
          <p className="mt-6 max-w-3xl body-copy">Sites de services au Canada, portfolio d’artiste, boutique en ligne, restaurant en France et applications de gestion : découvrez le besoin de chaque projet, sa solution et ses technologies.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((project) => (
              <article key={project.slug} className="content-card glass-card overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={project.image} alt={`Aperçu du projet ${project.title} réalisé par Soufiane Boutatss`} fill sizes="(min-width: 1280px) 380px, (min-width: 640px) 46vw, 100vw" className="object-cover" />
                </div>
                <div className="card-body">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#ff6b00]">{project.category}</p>
                  <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                  <p className="mt-3 body-copy">{project.summary}</p>
                  <Link href={`/portfolio/${project.slug}`} className="card-link inline-block text-white hover:text-[#ff6b00]">Voir l’étude de cas →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
