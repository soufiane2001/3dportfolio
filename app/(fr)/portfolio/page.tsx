import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { caseStudies, portfolioUpdatedAt } from "../../lib/portfolio";
import { absoluteUrl, pageMetadata } from "../../lib/site";

const heading = "Portfolio de développeur web";
const description = "Explorez les sites vitrines, boutiques et applications de Soufiane Boutatss. Chaque étude de cas présente le besoin, la solution et les fonctionnalités.";

export const metadata: Metadata = pageMetadata("/portfolio", `${heading} | Sites et applications`, description);

export default function PortfolioPage() {
  const url = absoluteUrl("/portfolio");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": url,
      url,
      name: heading,
      description,
      inLanguage: "fr",
      dateModified: portfolioUpdatedAt,
      isPartOf: { "@id": `${absoluteUrl()}/#website` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: caseStudies.length,
        itemListElement: caseStudies.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: absoluteUrl(`/portfolio/${project.slug}`),
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/fr") },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: url },
      ],
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background page-shell text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <div className="container">
          <nav aria-label="Fil d’Ariane" className="mb-8 text-sm text-white/65">
            <Link href="/fr" className="hover:text-white">Accueil</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Portfolio</span>
          </nav>
          <h1 className="max-w-4xl page-heading">{heading}</h1>
          <p className="mt-6 max-w-3xl body-copy">La vitrine de <Link href="/portfolio/pizza-napoli-toul" className="text-[#f08b9b] underline underline-offset-4">Pizza Napoli à Toul</Link> présente la carte et les horaires du restaurant. La boutique <Link href="/portfolio/mirado-clothing" className="text-[#f08b9b] underline underline-offset-4">Mirado Clothing</Link> permet de commander sur mobile. Les études de cas détaillent les fonctionnalités et les choix techniques de chaque projet.</p>
          <p className="mt-4 max-w-3xl body-copy">Pour un portail client, un outil de gestion ou une plateforme SaaS, consultez la prestation de <Link href="/developpement-web-sur-mesure" className="text-[#f08b9b] underline underline-offset-4">développement d’applications web sur mesure</Link>.</p>
          <div className="okc-secondary-grid mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
            {caseStudies.map((project) => (
              <article key={project.slug} className="content-card glass-card overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={project.image} alt={`Aperçu du projet ${project.title} réalisé par Soufiane Boutatss`} fill sizes="(min-width: 1280px) 380px, (min-width: 640px) 46vw, 100vw" className="object-cover object-top transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="card-body">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#ed687b]">{project.category}</p>
                  <h2 className="mt-2 text-xl font-bold">{project.title}</h2>
                  <p className="mt-3 body-copy">{project.summary}</p>
                  <Link href={`/portfolio/${project.slug}`} className="card-link inline-block text-white hover:text-[#ed687b]">Voir l’étude de cas →</Link>
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
