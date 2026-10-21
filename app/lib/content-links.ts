export type ContentLink = { href: string; label: string };

// Links are selected for the reader's next question, rather than a shared
// keyword such as "freelance" pushing every page to the same destinations.
export const contentLinks: Record<string, ContentLink[]> = {
  "/creation-site-catalogue": [
    { href: "/portfolio/dar-mooris", label: "Dar Mooris : collections et demande sur WhatsApp" },
    { href: "/blog/site-vitrine-ou-ecommerce", label: "Choisir un catalogue ou une boutique en ligne" },
    { href: "/developpeur-php", label: "Développement PHP et administration des données" },
    { href: "/contact", label: "Décrire vos références et le traitement des devis" },
  ],
  "/creation-site-web-cabinet-medical": [
    { href: "/portfolio/dr-boutatss-nora", label: "Le site du cabinet du Dr Nora Boutatss" },
    { href: "/blog/cahier-des-charges-site-web", label: "Préparer les pages et informations du cabinet" },
    { href: "/maintenance-site-web", label: "Organiser les mises à jour après livraison" },
    { href: "/contact", label: "Présenter le projet de votre cabinet" },
  ],
  "/creation-site-web-dentiste": [
    { href: "/prix-site-web-dentiste", label: "Comprendre le budget d’un site de dentiste" },
    { href: "/site-dentiste-prise-rendez-vous", label: "Relier le site à la prise de rendez-vous" },
    { href: "/referencement-seo-dentiste", label: "Développer le référencement du cabinet" },
    { href: "/refonte-site-web-dentiste", label: "Refondre un site dentaire existant" },
    { href: "/site-web-clinique-dentaire", label: "Organiser un site de clinique multi-praticiens" },
    { href: "/contact", label: "Présenter le projet du cabinet" },
  ],
  "/developpeur-nextjs": [
    { href: "/portfolio/gamlastan", label: "Gamlastan : une interface de boutique Next.js" },
    { href: "/blog/nextjs-seo-app-router-2026", label: "Comprendre le rendu et les métadonnées Next.js" },
    { href: "/maintenance-site-web", label: "Maintenance après la reprise ou la refonte" },
    { href: "/blog/cahier-des-charges-site-web", label: "Lister les parcours et les contenus à conserver" },
  ],
  "/portfolio/dar-mooris": [
    { href: "/creation-site-catalogue", label: "Créer un catalogue avec demande de devis" },
    { href: "/blog/site-vitrine-ou-ecommerce", label: "Comparer contact, devis et commande en ligne" },
  ],
  "/portfolio/dr-boutatss-nora": [
    { href: "/creation-site-web-cabinet-medical", label: "Créer le site vitrine de votre cabinet médical" },
    { href: "/maintenance-site-web", label: "Actualiser les informations de votre cabinet" },
  ],
  "/portfolio/gamlastan": [
    { href: "/developpeur-nextjs", label: "Création et reprise de sites Next.js" },
    { href: "/site-ecommerce", label: "Définir les fonctionnalités d’une boutique en ligne" },
  ],
  "/fr": [
    { href: "/services", label: "Comparer toutes les prestations web" },
    { href: "/france/developpeur-web-freelance", label: "Développement à distance pour les entreprises en France" },
    { href: "/canada/creation-site-web", label: "Préparer un site pour le Canada et le Québec" },
    { href: "/blog/cahier-des-charges-site-web", label: "Rédiger le brief de votre projet" },
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
  "/creation-site-web": [
    { href: "/creation-site-catalogue", label: "Présenter des produits et recevoir des demandes de devis" },
    { href: "/creation-site-web-cabinet-medical", label: "Présenter un cabinet et ses moyens de rendez-vous" },
    { href: "/creation-site-web-dentiste", label: "Créer un site pour dentiste ou cabinet dentaire" },
    { href: "/blog/cahier-des-charges-site-web", label: "Préparer les pages et contenus du site" },
    { href: "/blog/site-vitrine-ou-ecommerce", label: "Choisir entre vitrine, catalogue et boutique" },
    { href: "/portfolio/reby-art", label: "Exemple de présentation d’un artiste" },
    { href: "/site-ecommerce", label: "Prévoir un parcours de commande" },
    { href: "/maintenance-site-web", label: "Organiser le suivi après publication" }
  ],
  "/developpeur-web-freelance": [
    { href: "/blog/developpeur-web-freelance-france-remote", label: "Comparer les profils et les livrables" },
    { href: "/blog/cahier-des-charges-site-web", label: "Préparer un brief pour obtenir un devis" },
    { href: "/portfolio", label: "Examiner les projets et leurs technologies" },
    { href: "/maintenance-site-web", label: "Faire reprendre un site existant" }
  ],
  "/france/developpeur-web-freelance": [
    { href: "/blog/developpeur-web-freelance-france-remote", label: "Le guide de collaboration à distance" },
    { href: "/france/creation-site-web", label: "Créer un site pour votre entreprise en France" },
    { href: "/portfolio/reby-art", label: "Reby Art : présentation d’un projet React" },
    { href: "/blog/cahier-des-charges-site-web", label: "La checklist avant une demande de devis" }
  ],
  "/france/creation-site-web": [
    { href: "/blog/cahier-des-charges-site-web", label: "Préparer les contenus et fonctions du site" },
    { href: "/blog/site-vitrine-ou-ecommerce", label: "Définir le parcours commercial" },
    { href: "/portfolio/pizza-napoli-toul", label: "Une vitrine pour un restaurant à Toul" },
    { href: "/maintenance-site-web", label: "Prévoir la maintenance du site" }
  ],
  "/blog/developpeur-web-freelance-france-remote": [
    { href: "/france/developpeur-web-freelance", label: "Examiner la prestation de développement pour la France" },
    { href: "/blog/cahier-des-charges-site-web", label: "Compléter le modèle de brief" },
    { href: "/portfolio/reby-art", label: "Voir le projet React Reby Art" },
    { href: "/contact", label: "Présenter votre besoin et votre échéance" }
  ],
  "/blog/cahier-des-charges-site-web": [
    { href: "/services", label: "Choisir une prestation à partir du brief" },
    { href: "/blog/site-vitrine-ou-ecommerce", label: "Vitrine ou boutique : comparer les parcours" },
    { href: "/blog/developpeur-web-freelance-france-remote", label: "Choisir un développeur et organiser le suivi" },
    { href: "/contact", label: "Transmettre votre demande de projet" }
  ],
  "/blog/site-vitrine-ou-ecommerce": [
    { href: "/creation-site-catalogue", label: "Créer un catalogue sans paiement en ligne" },
    { href: "/creation-site-web", label: "Création de site professionnel" },
    { href: "/site-ecommerce", label: "Création d’une boutique avec commande" },
    { href: "/portfolio/site-ecommerce", label: "Voir un parcours de vente avec paiement à la livraison" },
    { href: "/blog/cahier-des-charges-site-web", label: "Décrire les fonctions à développer" }
  ],
  "/blog/prix-creation-site-web-maroc-2026": [
    { href: "/creation-site-web-casablanca", label: "Demander une création de site à Casablanca" },
    { href: "/blog/cahier-des-charges-site-web", label: "Préparer un périmètre comparable" },
    { href: "/blog/site-vitrine-ou-ecommerce", label: "Choisir le type de site à chiffrer" },
    { href: "/maintenance-site-web", label: "Séparer création et maintenance" }
  ],
  "/site-ecommerce": [
    { href: "/creation-site-catalogue", label: "Un catalogue avec devis si le prix dépend du projet" },
    { href: "/blog/site-vitrine-ou-ecommerce", label: "Comparer catalogue, devis et commande" },
    { href: "/portfolio/site-ecommerce", label: "BDM Store : catalogue et paiement à la livraison" },
    { href: "/blog/cahier-des-charges-site-web", label: "Préparer les fonctions et les contenus" },
    { href: "/maintenance-site-web", label: "Maintenir le parcours de commande" }
  ],
  "/maintenance-site-web": [
    { href: "/seo", label: "Vérifier l’indexation et les liens du site" },
    { href: "/developpeur-php", label: "Reprise PHP et MySQL" },
    { href: "/developpeur-nextjs", label: "Reprise et optimisation Next.js" },
    { href: "/blog/cahier-des-charges-site-web", label: "Inventorier les parcours et URL à préserver" }
  ],
};
