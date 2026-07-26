import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { caseStudies, getCaseStudy } from "../../lib/portfolio";
import { absoluteUrl } from "../../lib/site";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getCaseStudy((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} | Étude de cas`,
    description: project.summary,
    alternates: { canonical: absoluteUrl(`/portfolio/${project.slug}`) },
    openGraph: { title: project.title, description: project.summary, url: absoluteUrl(`/portfolio/${project.slug}`), images: [{ url: project.image, alt: project.title }] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/portfolio/${project.slug}`),
    creator: { "@type": "Person", "@id": `${absoluteUrl()}/#person`, name: "Soufiane Boutatss" },
    image: project.image,
    keywords: project.technologies.join(", "),
  };
  return (
    <>
      <SiteHeader />
      <main className="bg-black py-24 text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <article className="container max-w-5xl">
          <Link href="/portfolio" className="text-sm text-white/50 hover:text-[#ff6b00]">← Retour au portfolio</Link>
          <p className="section-subtitle mt-10">{project.category}</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">{project.summary}</p>
          <div className="relative mt-12 aspect-video overflow-hidden rounded-3xl border border-white/10">
            <Image src={project.image} alt={`Capture du projet ${project.title}`} fill priority sizes="(max-width: 1024px) 100vw, 1000px" className="object-cover" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <section><h2 className="text-2xl font-black">Contexte et objectif</h2><p className="mt-4 leading-8 text-white/60">{project.context}</p></section>
            <section><h2 className="text-2xl font-black">Solution réalisée</h2><p className="mt-4 leading-8 text-white/60">{project.solution}</p></section>
            <section><h2 className="text-2xl font-black">Technologies</h2><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/65">{tech}</span>)}</div></section>
            <section><h2 className="text-2xl font-black">Fonctionnalités</h2><ul className="mt-4 space-y-2 text-white/60">{project.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul></section>
          </div>
          <div className="mt-14 flex flex-wrap gap-4 border-t border-white/10 pt-10">
            {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-6 py-3 font-bold">Visiter le site</a>}
            <Link href={project.relatedService} className="rounded-full bg-[#ff6b00] px-6 py-3 font-bold">Découvrir le service lié</Link>
            <Link href="/contact" className="px-5 py-3 font-bold text-white/70">Discuter de mon projet →</Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
