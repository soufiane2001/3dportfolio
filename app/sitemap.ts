import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { caseStudies } from "./lib/portfolio";
import { SITE_URL, serviceLinks } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const seoUpdatedAt = new Date("2026-08-10");
  const staticPages = [
    "",
    ...serviceLinks.map(({ href }) => href),
    "/portfolio",
    "/a-propos",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: seoUpdatedAt,
  }));

  const portfolioPages = caseStudies.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: new Date("2026-07-26"),
  }));

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...portfolioPages, ...blogPages];
}
