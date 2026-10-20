import type { BlogPost } from "./posts";

export const categories = [
  { id: "preparer-un-projet", title: "Préparer un projet web", description: "Choisir le bon type de site, comparer les devis et organiser la collaboration avec un développeur." },
  { id: "web-et-referencement", title: "Développement web et référencement", description: "Comprendre les choix de rendu, les interfaces, les API et les fondations techniques du référencement." },
  { id: "applications", title: "Applications mobiles et logiciels", description: "Préparer une application Android, iOS ou desktop et comprendre ses connexions aux données." },
] as const;

const projectSlugs = new Set([
  "cahier-des-charges-site-web", "developpeur-web-freelance-france-remote",
  "developpeur-web-freelance-maroc-2026", "prix-creation-site-web-maroc-2026",
  "prix-application-mobile-maroc-2026", "creation-site-web-casablanca",
  "site-vitrine-ou-ecommerce", "site-web-pme-casablanca",
]);

export function postCategory(post: BlogPost): typeof categories[number]["id"] {
  if (projectSlugs.has(post.slug)) return "preparer-un-projet";
  if (/react-native|android|electron/.test(post.slug)) return "applications";
  return "web-et-referencement";
}
