import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { absoluteUrl, serviceLinks, whatsappUrl } from "../lib/site";

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  audience: string;
  benefits: { title: string; text: string }[];
  deliverables: string[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  related?: string[];
};

export default function ServicePage({ data }: { data: ServicePageData }) {
  const pageUrl = absoluteUrl(`/${data.slug}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.title,
      description: data.intro,
      url: pageUrl,
      areaServed: { "@type": "City", name: "Casablanca" },
      provider: { "@type": "Person", "@id": `${absoluteUrl()}/#person`, name: "Soufiane Boutatss" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: data.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,107,0,.18),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(168,85,247,.12),transparent_30%)]" />
          <div className="container relative max-w-5xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[.28em] text-[#ff6b00]">{data.eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl lg:text-7xl">{data.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">{data.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-[#ff6b00] px-7 py-4 font-bold">Demander un devis</Link>
              <a href={whatsappUrl(`Bonjour Soufiane, je souhaite discuter de : ${data.title}.`)} className="rounded-full border border-white/20 px-7 py-4 font-bold hover:border-[#ff6b00]">Parler sur WhatsApp</a>
              <Link href="/portfolio" className="px-4 py-4 font-bold text-white/70 hover:text-white">Voir mes réalisations →</Link>
            </div>
          </div>
        </section>

        <section className="container grid gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="section-subtitle">Une solution adaptée</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Un projet pensé pour votre activité</h2>
            <p className="mt-6 text-lg leading-8 text-white/60">{data.audience}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Livrables">
            {data.deliverables.map((item) => <li key={item} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-sm text-white/75">✓ {item}</li>)}
          </ul>
        </section>

        <section className="border-y border-white/10 bg-white/[.02] py-20">
          <div className="container">
            <p className="section-subtitle">Pourquoi cette approche</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Des choix utiles, pas des options superflues</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {data.benefits.map((item) => (
                <article key={item.title} className="glass-card p-7">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/55">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-20">
          <p className="section-subtitle">Méthode de travail</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Du besoin à la mise en ligne</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {data.process.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-white/10 p-6">
                <span className="text-sm font-black text-[#ff6b00]">0{index + 1}</span>
                <h3 className="mt-3 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-white/10 bg-white/[.02] py-20">
          <div className="container max-w-4xl">
            <p className="section-subtitle">Questions fréquentes</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Réponses avant de démarrer</h2>
            <div className="mt-8 space-y-4">
              {data.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-white/10 bg-black p-6">
                  <summary className="cursor-pointer font-bold">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-white/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16">
          <h2 className="text-2xl font-black">Explorer les services associés</h2>
          <nav className="mt-6 flex flex-wrap gap-3" aria-label="Services associés">
            {serviceLinks.filter((link) => link.href !== `/${data.slug}`).map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/65 hover:border-[#ff6b00]/50 hover:text-white">{link.label}</Link>
            ))}
          </nav>
        </section>

        <section className="bg-gradient-to-r from-[#ff6b00]/20 to-[#a855f7]/15 py-20 text-center">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black md:text-5xl">Parlons de votre projet</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">Décrivez votre besoin, vos objectifs et les fonctionnalités importantes. Vous recevrez une estimation adaptée, sans tarif inventé ni formule imposée.</p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-[#ff6b00] px-8 py-4 font-bold">Obtenir une estimation</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
