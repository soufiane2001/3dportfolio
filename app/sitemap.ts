import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { landingPages } from "./lib/landing-pages";
import { caseStudies } from "./lib/portfolio";
import { homeLanguages, landingLanguages } from "./lib/seo";
import { services } from "./lib/services";
import { absoluteUrl } from "./lib/site";

const staticPaths = [
  "/services",
  "/portfolio",
  "/a-propos",
  "/contact",
  "/blog",
  "/mentions-legales",
  "/politique-confidentialite",
];

// These aliases redirect to canonical pages already supplied by the catalogs.
const redirectedPaths = new Set([
  "/",
  "/creation-site-internet-casablanca",
  "/referencement-seo-casablanca",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  // The language map also contains x-default, which points to /fr again.
  const homeUrls = new Set(Object.values(homeLanguages));
  const localized: MetadataRoute.Sitemap = [...homeUrls].map((url) => ({
    url,
    alternates: { languages: homeLanguages },
  }));

  const staticPages: MetadataRoute.Sitemap = [
    ...staticPaths,
    ...Object.keys(services).map((slug) => `/${slug}`),
  ]
    .filter((path) => !redirectedPaths.has(path))
    .map((path) => ({ url: absoluteUrl(path) }));

  const commercial: MetadataRoute.Sitemap = landingPages
    // /en is rendered by the localized homepage, not its catalog placeholder.
    .filter((page) => !homeUrls.has(absoluteUrl(page.path)))
    .map((page) => {
      const languages = landingLanguages(page.path);
      return {
        url: absoluteUrl(page.path),
        ...(page.updatedAt ? { lastModified: page.updatedAt } : {}),
        ...(languages ? { alternates: { languages } } : {}),
      };
    });

  const portfolio: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: absoluteUrl(`/portfolio/${project.slug}`),
    ...(project.updatedAt ? { lastModified: project.updatedAt } : {}),
  }));

  const blog: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt ?? post.date,
  }));

  // Keep one entry per canonical URL when content catalogs overlap. Dates come
  // only from editorial data; a rebuild is not a content modification.
  const pages = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const page of [
    ...localized,
    ...staticPages,
    ...commercial,
    ...portfolio,
    ...blog,
  ]) {
    if (!redirectedPaths.has(new URL(page.url).pathname)) {
      pages.set(page.url, { ...pages.get(page.url), ...page });
    }
  }

  return [...pages.values()];
}
