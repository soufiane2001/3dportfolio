import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { landingPages } from "./lib/landing-pages";
import { caseStudies } from "./lib/portfolio";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-22");
  const staticPaths = ["/", "/portfolio", "/a-propos", "/contact", "/blog", "/mentions-legales", "/politique-confidentialite"];
  const staticPages = staticPaths.map(path => ({ url: absoluteUrl(path), lastModified: updated, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : .7 }));
  const commercial = landingPages.map(page => ({ url: absoluteUrl(page.path), lastModified: updated, changeFrequency: "monthly" as const, priority: page.path.includes("france/developpeur") ? .95 : page.path.includes("canada/developpeur") ? .9 : .8, ...(page.alternates ? { alternates: { languages: Object.fromEntries(Object.entries(page.alternates).map(([key,path]) => [key, absoluteUrl(path)])) } } : {}) }));
  const portfolio = caseStudies.map(project => ({ url: absoluteUrl(`/portfolio/${project.slug}`), lastModified: new Date("2026-07-26"), changeFrequency: "yearly" as const, priority: .65 }));
  const blog = posts.map(post => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: post.slug === "developpeur-web-freelance-france-remote" ? .85 : .6 }));
  return [...staticPages, ...commercial, ...portfolio, ...blog];
}
