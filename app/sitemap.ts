import { homeLanguages, landingLanguages } from "./lib/seo";
import { services } from "./lib/services";
import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { landingPages } from "./lib/landing-pages";
import { caseStudies } from "./lib/portfolio";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-06");
  const staticPaths = ["/portfolio", "/a-propos", "/contact", "/blog", "/mentions-legales", "/politique-confidentialite"];
  const staticPages = [...staticPaths, ...Object.keys(services).filter(slug => slug !== "referencement-seo-casablanca").map(slug => `/${slug}`)].map(path => ({ url: absoluteUrl(path), lastModified: updated, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : .7 }));
  const commercial = landingPages.filter(page => page.path !== "/en").map(page => ({ url: absoluteUrl(page.path), lastModified: updated, changeFrequency: "monthly" as const, priority: page.path.includes("france/developpeur") ? .95 : page.path.includes("canada/developpeur") ? .9 : .8, ...(landingLanguages(page.path) ? { alternates: { languages: landingLanguages(page.path)! } } : {}) }));
  const portfolio = caseStudies.map(project => ({ url: absoluteUrl(`/portfolio/${project.slug}`), lastModified: new Date("2026-07-26"), changeFrequency: "yearly" as const, priority: .65 }));
  const blog = posts.map(post => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: post.slug === "developpeur-web-freelance-france-remote" ? .85 : .6 }));
  const localized = ["fr", "en", "ar"].map(locale => ({ url: absoluteUrl(`/${locale}`), lastModified: updated, alternates: { languages: homeLanguages } }));
  return [...localized, ...staticPages, ...commercial, ...portfolio, ...blog];
}
