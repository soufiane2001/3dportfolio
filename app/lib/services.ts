import type { ServicePageData } from "../components/ServicePage";

const process = [
  { title: "Découverte", text: "Échange sur votre activité, vos objectifs, vos utilisateurs et les priorités du projet." },
  { title: "Cadrage", text: "Définition du périmètre, de l’architecture, des contenus et d’un devis personnalisé." },
  { title: "Conception", text: "Design, développement et points de validation réguliers avec un interlocuteur unique." },
  { title: "Mise en ligne", text: "Tests mobile, performance et SEO technique avant déploiement et prise en main." },
];

export const services: Record<string, ServicePageData> = {
  "creation-site-web-casablanca": {
    slug: "creation-site-web-casablanca",
    eyebrow: "Développeur web freelance à Casablanca",
    title: "Création de Site Web à Casablanca",
    intro: "Soufiane Boutatss accompagne les entreprises, indépendants, commerces, professions libérales, PME et startups dans la création de sites internet professionnels à Casablanca et au Maroc.",
    audience: "Votre site doit expliquer clairement votre offre, rassurer vos prospects et faciliter la prise de contact. Le projet peut prendre la forme d’un site vitrine, d’une boutique e-commerce, d’une plateforme personnalisée ou d’une application web connectée à vos outils.",
    benefits: [
      { title: "Un interlocuteur direct", text: "Vous échangez avec le développeur qui conçoit et réalise le projet, de la définition du besoin à la mise en ligne." },
      { title: "Conçu pour vos clients", text: "La navigation, les contenus et les appels à l’action sont organisés autour des questions de vos futurs clients." },
      { title: "Base technique durable", text: "Responsive, sécurité, performance, indexabilité et évolutivité sont pris en compte dès la conception." },
    ],
    deliverables: ["Site vitrine professionnel", "Boutique e-commerce", "Application web sur mesure", "Design responsive", "SEO technique initial", "Formulaire et WhatsApp", "Hébergement et déploiement selon besoin", "Maintenance sur devis"],
    process,
    faqs: [
      { question: "Combien coûte la création d’un site web à Casablanca ?", answer: "Le prix dépend du nombre de pages, du design, des contenus et des fonctionnalités. Un site vitrine et une plateforme sur mesure n’ont pas le même périmètre. Une estimation est proposée après un échange sur votre besoin ; aucun tarif non validé n’est affiché." },
      { question: "Combien de temps faut-il pour créer un site internet ?", answer: "Le délai dépend du périmètre, de la disponibilité des contenus et des validations. Le planning est défini dans le devis avant le démarrage." },
      { question: "Le site sera-t-il optimisé pour Google ?", answer: "Oui, les fondamentaux techniques sont intégrés : HTML sémantique, métadonnées, sitemap, performance, responsive et indexabilité. Le positionnement dépend ensuite aussi de la concurrence, du contenu et de l’autorité du domaine." },
      { question: "Puis-je demander un site adapté à mon secteur ?", answer: "Oui. Restaurants, cabinets, consultants, centres de formation, commerces, artisans, PME et startups ont des parcours clients différents. La structure est adaptée à l’activité, sans modèle générique imposé." },
    ],
  },
  "site-vitrine-casablanca": {
    slug: "site-vitrine-casablanca",
    eyebrow: "Présenter votre activité et générer des contacts",
    title: "Création de Site Vitrine à Casablanca",
    intro: "Un site vitrine professionnel permet à une entreprise de Casablanca d’être trouvée, de présenter ses services et de transformer une recherche Google en prise de contact.",
    audience: "Cette solution convient aux indépendants, médecins et cabinets, avocats, artisans, restaurants, consultants, centres de formation, acteurs de l’immobilier et PME qui ont besoin d’une présence claire, rapide et crédible.",
    benefits: [
      { title: "Crédibilité immédiate", text: "Un design cohérent, des preuves visibles et une présentation claire renforcent la confiance avant le premier échange." },
      { title: "Visible sur mobile", text: "L’expérience est conçue pour les smartphones, essentiels pour les recherches locales et les contacts WhatsApp." },
      { title: "Prêt pour le SEO local", text: "Structure, contenus, coordonnées, données structurées et liens vers votre fiche Google sont préparés proprement." },
    ],
    deliverables: ["Pages de services", "Design responsive", "Formulaire de contact", "Bouton WhatsApp", "Carte ou lien Google Maps si pertinent", "Nom de domaine et hébergement selon besoin", "HTTPS et sécurité de base", "Optimisation des images"],
    process,
    faqs: [
      { question: "À quoi sert un site vitrine ?", answer: "Il présente votre entreprise, vos services, vos preuves et vos coordonnées. Son objectif principal est de rassurer et de générer des appels, messages ou demandes de devis." },
      { question: "Le site sera-t-il responsive ?", answer: "Oui. Les pages et formulaires sont conçus et testés pour mobile, tablette et ordinateur." },
      { question: "Puis-je gérer le contenu moi-même ?", answer: "Cela dépend de la solution choisie. Un espace d’administration peut être prévu lorsque l’autonomie éditoriale fait partie du besoin." },
      { question: "Le nom de domaine et l’hébergement sont-ils inclus ?", answer: "Ils peuvent être configurés dans le cadre du projet. Les coûts et responsabilités sont précisés dans le devis, sans offre imposée." },
    ],
  },
  "creation-site-ecommerce-casablanca": {
    slug: "creation-site-ecommerce-casablanca",
    eyebrow: "Vendre en ligne au Maroc",
    title: "Création de Site E-commerce à Casablanca",
    intro: "Création de boutiques en ligne adaptées aux habitudes de vos clients, à votre catalogue et à votre organisation : commande en ligne, gestion des produits et paiement à la livraison ou intégrations convenues.",
    audience: "Une boutique efficace doit rester simple pour l’acheteur comme pour l’équipe qui traite les commandes. Le périmètre est défini selon le catalogue, les modes de paiement réellement retenus, la livraison, le stock et les besoins d’administration.",
    benefits: [
      { title: "Parcours d’achat clair", text: "Catalogue, fiches produits, panier et commande sont conçus pour limiter les frictions sur mobile." },
      { title: "Gestion adaptée", text: "L’administration des produits, commandes et stocks est cadrée selon votre fonctionnement réel." },
      { title: "Architecture évolutive", text: "PHP, Laravel, React, Next.js et MySQL permettent de choisir une solution cohérente avec le projet." },
    ],
    deliverables: ["Catalogue et catégories", "Fiches produits", "Panier et commandes", "Espace administrateur", "Gestion du stock selon besoin", "Paiement à la livraison", "Intégration de paiement validée au cadrage", "SEO des catégories et produits"],
    process,
    faqs: [
      { question: "Peut-on proposer le paiement à la livraison ?", answer: "Oui. Cette fonctionnalité existe déjà dans une réalisation du portfolio et peut être intégrée selon le processus de commande retenu." },
      { question: "Quels moyens de paiement peut-on connecter ?", answer: "Le choix dépend de votre prestataire, de votre compte marchand et du pays ciblé. Une intégration n’est annoncée qu’après vérification de l’API et des conditions du fournisseur." },
      { question: "Puis-je gérer mes produits et commandes ?", answer: "Oui, un espace d’administration peut couvrir les produits, catégories, commandes et stocks selon le périmètre validé." },
      { question: "La boutique sera-t-elle optimisée pour Google ?", answer: "Les bases techniques et les pages produits sont structurées pour être indexables. Le SEO e-commerce demande ensuite un travail continu sur le catalogue, les contenus et l’autorité." },
    ],
  },
  "developpement-web-sur-mesure-casablanca": {
    slug: "developpement-web-sur-mesure-casablanca",
    eyebrow: "Développeur Full Stack à Casablanca",
    title: "Développement Web Sur Mesure à Casablanca",
    intro: "Conception d’applications web, plateformes métier, dashboards et APIs lorsque les limites d’un site standard ne répondent pas aux processus de votre entreprise.",
    audience: "Un développement sur mesure est pertinent pour un SaaS, ERP, CRM, marketplace, outil interne, portail client, automatisation ou plateforme nécessitant des règles métier, des rôles utilisateurs et des données structurées.",
    benefits: [
      { title: "Compréhension métier", text: "Les écrans et automatisations sont définis à partir des tâches, rôles et contraintes de vos utilisateurs." },
      { title: "Full Stack", text: "React, Next.js, Laravel, PHP, MySQL, Firebase et REST API couvrent l’interface, le serveur et les intégrations." },
      { title: "Livraison progressive", text: "Le projet peut être découpé en versions utiles afin de valider les priorités avant d’étendre la plateforme." },
    ],
    deliverables: ["Architecture fonctionnelle", "Interface web responsive", "Backend Laravel ou solution adaptée", "REST API", "Authentification et rôles", "Base de données MySQL ou Firebase", "Dashboard", "Déploiement"],
    process,
    faqs: [
      { question: "Quand choisir une application sur mesure ?", answer: "Lorsque votre activité repose sur des règles, données ou workflows spécifiques qu’un CMS ou un logiciel standard ne couvre pas correctement." },
      { question: "Peut-on commencer par un MVP ?", answer: "Oui. Un périmètre initial centré sur les fonctions essentielles permet de tester l’usage avant de développer les modules secondaires." },
      { question: "Quelles technologies utilisez-vous ?", answer: "Selon le besoin : React, Next.js, Laravel, PHP, MySQL, Firebase, Electron.js et APIs REST. La technologie est choisie après le cadrage." },
      { question: "Une API peut-elle être connectée ?", answer: "Oui, si le service tiers propose une API documentée et accessible. Les contraintes techniques et commerciales sont vérifiées avant engagement." },
    ],
  },
  "application-mobile-casablanca": {
    slug: "application-mobile-casablanca",
    eyebrow: "React Native et Expo",
    title: "Développement d’Applications Mobiles à Casablanca",
    intro: "Soufiane Boutatss conçoit des applications mobiles cross-platform avec React Native et Expo pour répondre aux besoins des entreprises et porteurs de projet à Casablanca et au Maroc.",
    audience: "React Native permet de mutualiser une grande partie du développement pour Android et iOS. Cette approche convient aux applications métier, services clients, outils de gestion et MVP nécessitant une expérience mobile dédiée.",
    benefits: [
      { title: "Android et iOS", text: "Une base de code partagée facilite la cohérence fonctionnelle et les évolutions entre les deux plateformes." },
      { title: "Expérience mobile", text: "Navigation, formulaires, états de chargement et interactions sont pensés pour les usages tactiles." },
      { title: "Backend connecté", text: "Firebase ou une API Laravel peuvent gérer authentification, données et logique serveur selon le projet." },
    ],
    deliverables: ["Application React Native", "Configuration Expo", "Interfaces responsive", "Navigation", "Connexion Firebase ou API", "Authentification selon besoin", "Tests sur appareils", "Accompagnement pour les builds"],
    process,
    faqs: [
      { question: "Créez-vous des applications Android et iOS ?", answer: "Oui, React Native et Expo permettent de cibler Android et iOS avec une base technique commune." },
      { question: "Pouvez-vous connecter l’application à Firebase ?", answer: "Oui. Firebase fait partie des technologies déjà utilisées, notamment pour l’authentification, les données et le stockage selon le besoin." },
      { question: "Le prix d’une application mobile est-il fixe ?", answer: "Non. Il dépend des écrans, rôles, données, intégrations et contraintes de publication. Une estimation est réalisée après cadrage." },
      { question: "Pouvez-vous réaliser un MVP ?", answer: "Oui. Définir une première version avec les fonctionnalités essentielles est souvent la meilleure manière de valider un concept." },
    ],
  },
  "referencement-seo-casablanca": {
    slug: "referencement-seo-casablanca",
    eyebrow: "SEO technique et visibilité locale",
    title: "Référencement Naturel SEO à Casablanca",
    intro: "Accompagnement SEO technique et on-page pour rendre un site compréhensible, indexable et performant, avec une attention particulière aux recherches locales à Casablanca et au Maroc.",
    audience: "Le travail couvre l’audit, la structure des pages, les métadonnées, le maillage, l’indexation, les Core Web Vitals et les données structurées. Il ne remplace pas une promesse de position : aucun prestataire sérieux ne peut garantir une première place Google.",
    benefits: [
      { title: "Fondations techniques", text: "Robots, sitemap, canonical, rendu HTML, vitesse et structure sémantique sont vérifiés en priorité." },
      { title: "Contenu utile", text: "Chaque page répond à une intention réelle sans bourrage de mots-clés ni pages locales artificielles." },
      { title: "SEO local propre", text: "Zone desservie, cohérence des informations et recommandations Google Business Profile renforcent la compréhension locale." },
    ],
    deliverables: ["Audit SEO technique", "Optimisation on-page", "Google Search Console", "Sitemap et indexation", "Maillage interne", "Données structurées", "Core Web Vitals", "Checklist Google Business Profile"],
    process,
    faqs: [
      { question: "Pouvez-vous garantir la première position Google ?", answer: "Non. Les résultats dépendent de la concurrence, de l’historique du domaine, des contenus et de l’autorité. Le travail vise à améliorer durablement les signaux contrôlables." },
      { question: "Qu’est-ce que le SEO local ?", answer: "Il aide Google à comprendre l’activité, la zone de service et la pertinence pour une recherche géographique. Le site, la fiche Google Business Profile et les références locales doivent rester cohérents." },
      { question: "Quand voit-on des résultats SEO ?", answer: "Il n’existe pas de délai universel. L’indexation peut être rapide, mais la progression dépend du marché et demande généralement un suivi sur plusieurs mois." },
      { question: "Le SEO est-il inclus dans la création du site ?", answer: "Les fondamentaux techniques sont intégrés aux projets web. Une stratégie de contenu et d’autorité plus large nécessite un périmètre dédié." },
    ],
  },
};

