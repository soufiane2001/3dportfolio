import type { Metadata } from "next";

export const SITE_URL = "https://www.soufianeboutatss.sbs";
export const OWNER = "Soufiane Boutatss";
export const EMAIL = "sboutatss@gmail.com";
export const WHATSAPP_NUMBER = "212689213015";
export const OG_IMAGE = "/soufiane-boutatss-creation-site-web-casablanca-og.png";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function pageMetadata(path: string, title: string, description: string, languages?: Record<string, string>): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(OG_IMAGE);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages },
    openGraph: { type: "website", locale: "fr_FR", siteName: OWNER, title, description, url, images: [{ url: image, width: 1730, height: 902, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export const serviceLinks = [
  { href: "/creation-site-web", label: "Création de site web" },
  { href: "/developpement-web-sur-mesure", label: "Développement sur mesure" },
  { href: "/developpeur-react", label: "React / Next.js" },
  { href: "/developpeur-php", label: "PHP / Laravel" },
  { href: "/developpeur-application-mobile", label: "Applications mobiles" },
  { href: "/seo", label: "SEO & performance" },
] as const;

export const marketLinks = [
  { href: "/france", label: "France" },
  { href: "/canada", label: "Canada / Québec" },
  { href: "/belgique", label: "Belgique" },
  { href: "/suisse", label: "Suisse" },
  { href: "/developpement-web-sur-mesure-casablanca", label: "Application web Maroc" },
  { href: "/casablanca/seo", label: "SEO Casablanca" },
  { href: "/en", label: "English" },
] as const;
