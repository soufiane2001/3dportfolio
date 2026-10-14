import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { posts } from "./posts";
import { absoluteUrl } from "../lib/site";

const OG_IMAGE = absoluteUrl("/soufiane-boutatss-creation-site-web-casablanca-og.png");

export const metadata: Metadata = {
  title: { absolute: "Blog | Soufiane Boutatss — Développeur Web & Mobile" },
  description: "Articles techniques sur React, React Native, Laravel, Next.js et le développement web moderne. Conseils et bonnes pratiques par Soufiane Boutatss.",
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    title: "Blog — Soufiane Boutatss",
    description: "Articles techniques sur React, React Native, Laravel et Next.js.",
    url: absoluteUrl("/blog"),
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Blog Soufiane Boutatss — Articles techniques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Soufiane Boutatss",
    description: "Articles techniques sur React, React Native, Laravel et Next.js.",
    images: [OG_IMAGE],
  },
};

export default function BlogPage() {
  return (
    <>
    <SiteHeader />
    <main className="min-h-screen bg-background page-shell">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#ed687b] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Articles & Tutoriels
          </p>
          <h1 className="page-heading text-white mb-6">
            Blog <span className="text-primary">Technique</span>
          </h1>
          <p className="body-copy max-w-xl">
            Partage d'expériences, bonnes pratiques et tutoriels sur le développement web et mobile.
          </p>
        </div>

        {/* Posts grid */}
        <div className="okc-journal-grid grid gap-x-12 gap-y-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="content-card group glass-card p-5 sm:p-7 hover:border-[#ed687b]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={post.image} alt="" width={28} height={28} loading="lazy" decoding="async" className="object-contain" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#ed687b]/10 text-[#ed687b] border border-[#ed687b]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#ed687b] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="body-copy mb-6">
                {post.excerpt}
              </p>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-white/65 text-sm">
                <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>{post.readTime} min de lecture</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-[#ed687b] transition-colors text-sm">
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    </main>
    <SiteFooter />
    </>
  );
}
