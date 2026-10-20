import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { landingPages } from "../../lib/landing-pages";
import { absoluteUrl, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/services", "Services web freelance : sites, applications et maintenance", "Comparez les prestations de création de site, e-commerce, application web ou mobile, maintenance et SEO. Projets et devis en français, à distance.");

const groups = [
  { title: "Créer un site ou vendre en ligne", intro: "Présenter vos services, montrer vos réalisations ou permettre à un client de commander : le parcours attendu détermine le type de site.", slugs: ["creation-site-web", "site-ecommerce", "developpeur-web-freelance"] },
  { title: "Développer une application ou renforcer une équipe", intro: "Construire un outil métier, connecter une API ou reprendre un produit existant, avec des tâches et des critères de validation définis.", slugs: ["developpement-web-sur-mesure", "developpeur-application-mobile", "developpeur-react", "developpeur-nextjs", "developpeur-php", "developpeur-laravel"] },
  { title: "Entretenir et améliorer un site existant", intro: "Corriger un problème, vérifier l’indexation ou faire évoluer un parcours après examen du site et de son environnement.", slugs: ["maintenance-site-web", "seo"] },
];
const services = groups.flatMap(group => group.slugs).map(slug => landingPages.find(page => page.path === `/${slug}`)!);

export default function ServicesPage() {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((page, index) => ({ "@type": "ListItem", position: index + 1, name: page.h1, url: absoluteUrl(page.path) })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/fr") },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
    ] },
  ];
  return <><SiteHeader /><main className="page-shell bg-background text-white">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="container max-w-6xl">
      <nav aria-label="Fil d’Ariane" className="mb-8 text-sm text-white/65"><Link href="/fr">Accueil</Link><span aria-hidden="true"> / </span><span aria-current="page">Services</span></nav>
      <p className="section-subtitle !text-left">Du besoin à la livraison</p>
      <h1 className="mt-4 page-heading">Quelle prestation pour votre projet web ?</h1>
      <p className="mt-6 max-w-3xl body-copy">Je vous accompagne dans la création de sites, de boutiques et d’applications, ainsi que dans la reprise et la maintenance de projets existants. La collaboration se fait à distance, en français ou en anglais, selon un périmètre défini ensemble.</p>
      <nav aria-label="Choisir une prestation" className="my-10 flex flex-wrap gap-5 text-sm">{groups.map((group, index) => <a key={group.title} href={`#service-group-${index}`} className="text-[#f08b9b] underline underline-offset-4">{group.title}</a>)}</nav>
      {groups.map((group, index) => <section key={group.title} id={`service-group-${index}`} className="scroll-mt-28 border-t border-white/15 py-12">
        <h2 className="section-heading">{group.title}</h2><p className="mt-4 max-w-3xl body-copy">{group.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">{group.slugs.map(slug => {
          const page = services.find(service => service.path === `/${slug}`)!;
          return <article key={slug} className="border-l border-white/20 pl-5"><h3 className="text-xl font-bold"><Link className="hover:text-[#f08b9b]" href={page.path}>{page.h1}</Link></h3><p className="mt-3 body-copy">{page.description}</p></article>;
        })}</div>
      </section>)}
      <section className="border-t border-white/15 py-12"><h2 className="section-heading">Avant de demander un devis</h2>
        <p className="mt-5 max-w-3xl body-copy">Préparez votre objectif, les publics visés, les pages ou écrans souhaités, les contenus disponibles et les outils à connecter. Pour une refonte, ajoutez le site actuel et les parcours à préserver. Le devis distingue les fonctions initiales, les options et le suivi après livraison.</p>
        <div className="mt-6 flex flex-wrap gap-6 text-[#f08b9b]"><Link href="/blog/cahier-des-charges-site-web" className="underline underline-offset-4">Modèle de cahier des charges</Link><Link href="/blog/site-vitrine-ou-ecommerce" className="underline underline-offset-4">Site vitrine ou e-commerce ?</Link><Link href="/portfolio" className="underline underline-offset-4">Examiner les projets du portfolio</Link></div>
        <Link href="/contact" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-bold">Présenter mon projet</Link>
      </section>
    </div>
  </main><SiteFooter /></>;
}
