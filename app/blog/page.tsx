import type { Metadata } from "next";
import Link from "next/link";
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
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff6b00] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Articles & Tutoriels
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#a855f7]">Technique</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Partage d'expériences, bonnes pratiques et tutoriels sur le développement web et mobile.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block glass-card p-8 hover:border-[#ff6b00]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={post.image} alt="" width={28} height={28} loading="lazy" decoding="async" className="object-contain" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff6b00] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-white/30 text-xs">
                <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>{post.readTime} min de lecture</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-[#ff6b00] transition-colors text-sm">
            ← Retour au portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
