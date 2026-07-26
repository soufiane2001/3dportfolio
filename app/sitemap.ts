import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { caseStudies } from "./lib/portfolio";
import { SITE_URL, serviceLinks } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    ...serviceLinks.map(({ href }) => ({ path: href, priority: href === "/creation-site-web-casablanca" ? 0.95 : 0.85, changeFrequency: "monthly" as const })),
    { path: "/portfolio", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/a-propos", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/blog", priority: 0.75, changeFrequency: "weekly" as const },
  ].map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const portfolioPages = caseStudies.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...portfolioPages, ...blogPages];
}
