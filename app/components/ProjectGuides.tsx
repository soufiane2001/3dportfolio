import Link from "next/link";
import { getPostBySlug } from "../blog/posts";

const guides = ["cahier-des-charges-site-web", "site-vitrine-ou-ecommerce", "developpeur-web-freelance-france-remote"];

export default function ProjectGuides() {
  return <section className="container section-padding border-t border-white/10" aria-labelledby="project-guides-heading">
    <p className="section-subtitle !text-left">Avant de démarrer</p>
    <h2 id="project-guides-heading" className="mt-3 section-heading">Préparer votre projet web</h2>
    <p className="mt-5 max-w-3xl body-copy">Un brief clair permet de comparer les propositions et de concentrer le travail sur ce qui sera utile à vos visiteurs.</p>
    <div className="mt-8 grid gap-8 md:grid-cols-3">{guides.map(slug => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      return <article key={slug} className="border-t border-white/20 pt-5">
        <h3 className="text-xl font-bold"><Link className="hover:text-[#f08b9b]" href={`/blog/${slug}`}>{post.title}</Link></h3>
        <p className="mt-3 body-copy">{post.excerpt}</p>
      </article>;
    })}</div>
    <Link href="/blog" className="mt-8 inline-block text-[#f08b9b] underline underline-offset-4">Tous les guides et tutoriels</Link>
  </section>;
}
