import type { Metadata } from "next";

export const SITE_URL = "https://soufianeboutatss.sbs";
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

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(OG_IMAGE);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      siteName: OWNER,
      title,
      description,
      url,
      images: [{ url: image, width: 1730, height: 902, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const serviceLinks = [
  { href: "/creation-site-web-casablanca", label: "Création site web Casablanca" },
  { href: "/site-vitrine-casablanca", label: "Site vitrine Casablanca" },
  { href: "/creation-site-ecommerce-casablanca", label: "Site e-commerce Casablanca" },
  { href: "/developpement-web-sur-mesure-casablanca", label: "Développement web sur mesure" },
  { href: "/application-mobile-casablanca", label: "Application mobile Casablanca" },
  { href: "/referencement-seo-casablanca", label: "Référencement SEO Casablanca" },
] as const;

