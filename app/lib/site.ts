export const SITE_URL = "https://soufianeboutatss.sbs";
export const OWNER = "Soufiane Boutatss";
export const EMAIL = "sboutatss@gmail.com";
export const WHATSAPP_NUMBER = "212689213015";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const serviceLinks = [
  { href: "/creation-site-web-casablanca", label: "Création de site web" },
  { href: "/site-vitrine-casablanca", label: "Site vitrine" },
  { href: "/creation-site-ecommerce-casablanca", label: "Site e-commerce" },
  { href: "/developpement-web-sur-mesure-casablanca", label: "Développement sur mesure" },
  { href: "/application-mobile-casablanca", label: "Application mobile" },
  { href: "/referencement-seo-casablanca", label: "Référencement SEO" },
] as const;

