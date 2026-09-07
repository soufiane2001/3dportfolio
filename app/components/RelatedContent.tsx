import Link from "next/link";
import { posts } from "../blog/posts";
import { caseStudies } from "../lib/portfolio";
import { landingPages } from "../lib/landing-pages";

const topics = ["react", "next", "php", "laravel", "mobile", "seo", "ecommerce", "casablanca", "maroc", "france", "canada", "freelance"];
const normalize = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/e-commerce/g, "ecommerce");

export default function RelatedContent({ path, subject, locale = "fr" }: { path: string; subject: string; locale?: "fr" | "en" | "ar" }) {
  const source = normalize(`${path} ${subject}`);
  const score = (text: string) => topics.filter(topic => source.includes(topic) && normalize(text).includes(topic)).length;
  const services = landingPages.filter(page => page.path !== path && page.path !== "/en" && page.lang === (locale === "en" ? "en" : "fr"))
    .map(page => ({ href: page.path, label: page.h1, score: score(`${page.path} ${page.h1}`) }))
    .filter(page => page.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
  const articles = locale === "fr" ? posts.filter(post => `/blog/${post.slug}` !== path)
    .map(post => ({ href: `/blog/${post.slug}`, label: post.title, score: score(`${post.slug} ${post.tags.join(" ")}`) }))
    .filter(post => post.score > 0).sort((a, b) => b.score - a.score).slice(0, 2) : [];
  const projects = locale === "fr" ? caseStudies.filter(project => `/portfolio/${project.slug}` !== path)
    .map(project => ({ href: `/portfolio/${project.slug}`, label: project.title, score: project.relatedService === path ? 10 : score(`${project.slug} ${project.technologies.join(" ")}`) }))
    .filter(project => project.score > 0).sort((a, b) => b.score - a.score).slice(0, 2) : [];
  const marketServices = ["/france", "/canada", "/belgique", "/suisse"].includes(path)
    ? landingPages.filter(page => page.path.startsWith(`${path}/`)).map(page => ({ href: page.path, label: page.h1 })) : [];
  const maintenance = locale === "fr" && ["/creation-site-web", "/seo", "/developpement-web-sur-mesure"].includes(path)
    ? [{ href: "/maintenance-site-web", label: "Maintenance et évolution du site après sa mise en ligne" }] : [];
  const links = [...new Map([...marketServices, ...services, ...maintenance, ...articles, ...projects].map(link => [link.href, link])).values()];
  if (!links.length) return null;
  const heading = locale === "en" ? "Services for your project" : locale === "ar" ? "خدمات ذات صلة (بالفرنسية)" : "Services, guides et réalisations associés";
  return <aside className="container border-t border-white/10 py-12"><h2 className="text-2xl font-bold">{heading}</h2><nav aria-label={heading}><ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">{links.map(link => <li key={link.href}><Link href={link.href} className="text-white/70 underline decoration-white/20 underline-offset-4 hover:text-[#ff8a3d] focus-visible:outline-2 focus-visible:outline-[#ff6b00]">{link.label}</Link></li>)}</ul></nav></aside>;
}
