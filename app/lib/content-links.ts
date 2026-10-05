export type ContentLink = { href: string; label: string };

// Links are selected for the reader's next question, rather than a shared
// keyword such as "freelance" pushing every page to the same destinations.
export const contentLinks: Record<string, ContentLink[]> = {
  "/fr": [
    { href: "/creation-site-web-casablanca", label: "Création de site web à Casablanca" },
    { href: "/casablanca/seo", label: "Audit et référencement naturel à Casablanca" },
    { href: "/portfolio/cash-management-app", label: "Application de gestion de dépenses : le projet mobile" },
  ],
  "/casablanca/seo": [
    { href: "/blog/seo-site-entreprise-maroc", label: "Diagnostiquer la visibilité d’un site d’entreprise" },
    { href: "/creation-site-web-casablanca", label: "Créer ou refondre votre site à Casablanca" },
    { href: "/seo", label: "Audit technique : indexation et performance" },
    { href: "/a-propos", label: "Le parcours du développeur qui intervient sur votre site" },
  ],
  "/seo": [
    { href: "/casablanca/seo", label: "Accompagnement SEO pour une entreprise à Casablanca" },
    { href: "/blog/seo-site-entreprise-maroc", label: "Indexation, impressions et clics : comprendre les écarts" },
    { href: "/blog/nextjs-seo-app-router-2026", label: "Rendu et référencement d’un site Next.js" },
  ],
  "/blog/seo-site-entreprise-maroc": [
    { href: "/casablanca/seo", label: "Demander un audit SEO à Casablanca" },
    { href: "/seo", label: "Les contrôles d’un audit technique" },
    { href: "/creation-site-web-casablanca", label: "Préparer la création ou la refonte du site" },
  ],
  "/blog/nextjs-seo-app-router-2026": [
    { href: "/developpeur-nextjs", label: "Développement et reprise de sites Next.js" },
    { href: "/seo", label: "Vérifier les métadonnées et le rendu du site" },
    { href: "/casablanca/seo", label: "Audit SEO pour votre entreprise à Casablanca" },
  ],
  "/creation-site-web-casablanca": [
    { href: "/site-vitrine-casablanca", label: "Présenter votre activité avec un site vitrine" },
    { href: "/creation-site-ecommerce-casablanca", label: "Vendre avec une boutique en ligne" },
    { href: "/casablanca/seo", label: "Améliorer le référencement du site existant" },
    { href: "/blog/prix-creation-site-web-maroc-2026", label: "Préparer un budget de création de site" },
  ],
  "/developpement-web-sur-mesure-casablanca": [
    { href: "/developpement-web-sur-mesure", label: "Cadrer un MVP ou une plateforme SaaS" },
    { href: "/portfolio/patient-management", label: "Exemple d’outil de gestion métier" },
    { href: "/developpeur-laravel", label: "API et applications métier avec Laravel" },
  ],
  "/application-mobile-casablanca": [
    { href: "/portfolio/cash-management-app", label: "Application React Native de gestion de dépenses" },
    { href: "/developpeur-application-mobile", label: "Cadrer une application React Native et Expo" },
    { href: "/blog/prix-application-mobile-maroc-2026", label: "Comprendre le budget d’une application mobile" },
  ],
  "/portfolio/cash-management-app": [
    { href: "/application-mobile-casablanca", label: "Développer une application mobile à Casablanca" },
    { href: "/developpeur-application-mobile", label: "React Native, Expo et connexion aux données" },
    { href: "/blog/firebase-react-native-guide", label: "Comprendre Firebase avec React Native" },
  ],
  "/blog/prix-application-mobile-maroc-2026": [
    { href: "/application-mobile-casablanca", label: "Demander un devis pour une application mobile" },
    { href: "/portfolio/cash-management-app", label: "Voir un projet de suivi de dépenses" },
  ],
};
