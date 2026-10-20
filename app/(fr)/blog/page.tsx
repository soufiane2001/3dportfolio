import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { posts } from "../../blog/posts";
import { categories, postCategory } from "../../blog/categories";
import { absoluteUrl, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("/blog", "Guides de création de site web, SEO et applications", "Cahier des charges, choix d’un développeur, budget, site vitrine ou e-commerce : guides pratiques et tutoriels web et mobile par Soufiane Boutatss.");

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => (b.updatedAt ?? b.date).localeCompare(a.updatedAt ?? a.date));
  const structuredData = [
    { "@context": "https://schema.org", "@type": "CollectionPage", name: "Guides et tutoriels web", url: absoluteUrl("/blog"), inLanguage: "fr", mainEntity: {
      "@type": "ItemList", itemListElement: sortedPosts.map((post, index) => ({ "@type": "ListItem", position: index + 1, name: post.title, url: absoluteUrl(`/blog/${post.slug}`) })),
    } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/fr") },
      { "@type": "ListItem", position: 2, name: "Guides et tutoriels", item: absoluteUrl("/blog") },
    ] },
  ];
  return <><SiteHeader /><main className="min-h-screen bg-background page-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="container max-w-5xl">
      <div className="mb-12">
        <p className="text-[#f08b9b] text-sm font-medium tracking-[0.3em] uppercase mb-4">Guides & tutoriels</p>
        <h1 className="page-heading text-white mb-6">Créer, faire évoluer et référencer votre site web</h1>
        <p className="body-copy max-w-3xl">Des guides pour préparer un projet et comprendre les choix techniques : brief, budget, collaboration, sites web et applications. Pour une intervention, retrouvez les <Link href="/services" className="text-[#f08b9b] underline underline-offset-4">prestations de développement et de maintenance</Link>.</p>
      </div>
      <nav aria-label="Thèmes du blog" className="mb-12 flex flex-wrap gap-4">{categories.map(category => <a key={category.id} href={`#${category.id}`} className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 hover:border-[#ed687b]">{category.title}</a>)}</nav>
      {categories.map(category => <section id={category.id} key={category.id} className="scroll-mt-28 border-t border-white/15 py-10">
        <h2 className="section-heading">{category.title}</h2><p className="mt-4 mb-8 body-copy max-w-3xl">{category.description}</p>
        <div className="okc-journal-grid grid gap-x-12 gap-y-8 md:grid-cols-2">{sortedPosts.filter(post => postCategory(post) === category.id).map(post => <article key={post.slug} className="content-card glass-card p-5 sm:p-7">
          <div className="flex items-center gap-3 mb-4"><img src={post.image} alt="" width={28} height={28} loading="lazy" decoding="async" className="object-contain" /><div className="flex flex-wrap gap-2">{post.tags.map(tag => <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#ed687b]/10 text-[#f08b9b] border border-[#ed687b]/20">{tag}</span>)}</div></div>
          <h3 className="text-xl font-bold text-white mb-3 leading-snug"><Link href={`/blog/${post.slug}`} className="hover:text-[#f08b9b]">{post.title}</Link></h3>
          <p className="body-copy mb-6">{post.excerpt}</p>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-white/65 text-sm"><span>{post.updatedAt ? "Mis à jour le " : "Publié le "}<time dateTime={post.updatedAt ?? post.date}>{new Date(post.updatedAt ?? post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time></span><span>{post.readTime} min de lecture</span></div>
        </article>)}</div>
      </section>)}
      <div className="text-center mt-12"><Link href="/fr" className="text-white/70 underline underline-offset-4">Retour au portfolio</Link></div>
    </div>
  </main><SiteFooter /></>;
}
