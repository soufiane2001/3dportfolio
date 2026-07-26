import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { caseStudies } from "../lib/portfolio";
import { absoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Portfolio Développeur Web | Sites & Applications",
  description: "Découvrez des sites vitrines, e-commerce, applications web, mobiles et logiciels réalisés par Soufiane Boutatss.",
  alternates: { canonical: absoluteUrl("/portfolio") },
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-black py-24 text-white">
        <div className="container">
          <p className="section-subtitle">Réalisations</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black md:text-6xl">Portfolio web, mobile et applications métier</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">Des projets existants présentés sans statistiques inventées : contexte, solution, technologies et fonctionnalités visibles.</p>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <article key={project.slug} className="glass-card overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={project.image} alt={`Aperçu du projet ${project.title} réalisé par Soufiane Boutatss`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#ff6b00]">{project.category}</p>
                  <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/55">{project.summary}</p>
                  <Link href={`/portfolio/${project.slug}`} className="mt-5 inline-block font-bold text-white hover:text-[#ff6b00]">Voir l’étude de cas →</Link>
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

