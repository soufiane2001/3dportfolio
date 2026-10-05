import { homeLanguages, landingLanguages } from "./lib/seo";
import { services } from "./lib/services";
import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { landingPages } from "./lib/landing-pages";
import { caseStudies } from "./lib/portfolio";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/portfolio", "/a-propos", "/contact", "/blog", "/mentions-legales", "/politique-confidentialite"];
  const staticPages = [...staticPaths, ...Object.keys(services).filter(slug => slug !== "referencement-seo-casablanca").map(slug => `/${slug}`)].map(path => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: .7 }));
  const commercial = landingPages.filter(page => page.path !== "/en").map(page => ({ url: absoluteUrl(page.path), ...(page.updatedAt ? { lastModified: new Date(page.updatedAt) } : {}), changeFrequency: "monthly" as const, priority: .8, ...(landingLanguages(page.path) ? { alternates: { languages: landingLanguages(page.path)! } } : {}) }));
  const portfolio = caseStudies.map(project => ({ url: absoluteUrl(`/portfolio/${project.slug}`), ...(project.updatedAt ? { lastModified: new Date(project.updatedAt) } : {}), changeFrequency: "yearly" as const, priority: .65 }));
  const blog = posts.map(post => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(post.updatedAt ?? post.date), changeFrequency: "monthly" as const, priority: .6 }));
  const localized = ["fr", "en", "ar"].map(locale => ({ url: absoluteUrl(`/${locale}`), alternates: { languages: homeLanguages } }));
  return [...localized, ...staticPages, ...commercial, ...portfolio, ...blog];
}
