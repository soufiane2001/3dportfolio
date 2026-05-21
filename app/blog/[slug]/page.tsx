import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug } from "../posts";

const BASE_URL = "https://soufianeboutatssdev.com";
const AUTHOR_IMAGE = "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Soufiane Boutatss`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Soufiane Boutatss", url: BASE_URL }],
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Soufiane Boutatss"],
      tags: post.tags,
      images: [
        {
          url: AUTHOR_IMAGE,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [AUTHOR_IMAGE],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: AUTHOR_IMAGE,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: "Soufiane Boutatss",
      url: BASE_URL,
      sameAs: [
        "https://github.com/soufiane2001",
        "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Soufiane Boutatss",
      url: BASE_URL,
    },
    keywords: post.tags.join(", "),
    inLanguage: "fr-FR",
    timeRequired: `PT${post.readTime}M`,
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-[#ff6b00] transition-colors text-sm mb-12">
          ← Retour au blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-white/30 text-sm mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src={AUTHOR_IMAGE}
              alt="Soufiane Boutatss"
              width={32}
              height={32}
              className="rounded-full object-cover border border-white/10"
            />
            <span className="text-white/60 font-medium">Soufiane Boutatss</span>
          </div>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime} min de lecture</span>
        </div>

        {/* Content */}
        <article
          className="prose prose-invert prose-orange max-w-none
            prose-headings:font-black prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-4
            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4
            prose-code:text-[#ff6b00] prose-code:bg-[#ff6b00]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="glass-card p-6 flex items-center gap-4">
            <Image
              src={AUTHOR_IMAGE}
              alt="Soufiane Boutatss"
              width={56}
              height={56}
              className="rounded-full object-cover border-2 border-[#ff6b00]/30 shrink-0"
            />
            <div>
              <p className="text-white font-bold">Soufiane Boutatss</p>
              <p className="text-white/50 text-sm">Développeur Web & Mobile — React, React Native, Laravel, Next.js</p>
              <a href="https://wa.me/212689213015" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-2 text-xs px-3 py-1 bg-[#ff6b00] text-white rounded-full hover:opacity-90 transition-opacity">
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
