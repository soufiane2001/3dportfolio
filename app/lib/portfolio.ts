export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  solution: string;
  technologies: string[];
  features: string[];
  image: string;
  website?: string;
  relatedService: string;
  updatedAt?: string;
  imageKind?: "screenshot" | "illustration";
  details?: { title: string; paragraphs: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "site-ecommerce",
    title: "Site e-commerce avec paiement à la livraison",
    category: "E-commerce",
    summary: "Une plateforme de vente en ligne avec catalogue, commande et paiement à la livraison.",
    context: "Le projet présent dans le portfolio avait pour objectif de proposer une expérience d’achat en ligne complète adaptée à la vente avec paiement à la livraison.",
    solution: "Développement d’une interface e-commerce reliée à une base MySQL, avec un parcours centré sur la consultation des produits et la commande.",
    technologies: ["PHP", "CSS", "MySQL"],
    features: ["Catalogue produits", "Parcours de commande", "Paiement à la livraison", "Base de données MySQL", "Interface responsive"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369049/Capture_d_%C3%A9cran_2026-05-10_022349_pn3hp8.png",
    website: "https://bdmstore.store/ecom/index.php",
    relatedService: "/creation-site-ecommerce-casablanca",
  },
  {
    slug: "reby-art",
    title: "Reby Art — Portfolio d’artiste",
    category: "Site vitrine",
    summary: "Un portfolio élégant conçu pour présenter le travail d’un peintre français.",
    context: "L’enjeu était de traduire une identité artistique en une expérience web claire, en laissant les œuvres et l’univers du peintre occuper la place centrale.",
    solution: "Création d’une interface React qui structure la présentation de l’artiste et de ses réalisations avec une navigation adaptée au contenu visuel.",
    technologies: ["React", "JavaScript"],
    features: ["Présentation de l’artiste", "Galerie de réalisations", "Design responsive", "Navigation claire"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369125/Capture_d_%C3%A9cran_2026-05-10_022508_ecupwg.png",
    website: "https://rebyart.vercel.app/",
    relatedService: "/site-vitrine-casablanca",
  },
  {
    slug: "highup-counselling",
    title: "HighUp Counselling — Site de services",
    category: "Site professionnel",
    summary: "Un site professionnel pour présenter des services de psychologie et faciliter la compréhension de l’offre.",
    context: "Le site devait rendre les services de counselling accessibles et rassurants, avec une présentation professionnelle adaptée au public de l’activité.",
    solution: "Conception d’un site Wix structuré autour de la présentation des services, de l’identité du cabinet et de la prise de contact.",
    technologies: ["Wix"],
    features: ["Présentation des services", "Contenu professionnel", "Responsive", "Prise de contact"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369183/Capture_d_%C3%A9cran_2026-05-10_022608_m8mer3.png",
    website: "https://www.highupcounselling.ca/",
    relatedService: "/site-vitrine-casablanca",
  },
  {
    slug: "horea-formation",
    title: "Horea Formation — Centre de formation",
    category: "Site vitrine",
    summary: "Un site WordPress destiné à présenter un centre de formation et ses activités.",
    context: "Le centre avait besoin d’une présence web permettant aux visiteurs de comprendre son offre de formation et d’accéder facilement aux informations essentielles.",
    solution: "Mise en place d’un site WordPress avec une organisation éditoriale adaptée à la présentation du centre et de ses formations.",
    technologies: ["WordPress"],
    features: ["Présentation du centre", "Offre de formations", "Pages de contenu", "Responsive"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369246/Capture_d_%C3%A9cran_2026-05-10_022707_yrmkgs.png",
    website: "https://www.horea-formation.com/",
    relatedService: "/site-vitrine-casablanca",
  },
  {
    slug: "cash-management-app",
    title: "Cash Management — Application de gestion de dépenses",
    category: "Application mobile",
    summary: "Application mobile de gestion et de suivi des dépenses avec React Native, Expo et Firebase. Découvrez le contexte et les technologies du projet.",
    context: "Le projet répond à un besoin de suivi financier depuis un smartphone, avec des données accessibles dans une interface mobile dédiée.",
    solution: "Développement d’une application React Native Expo connectée à Firebase pour gérer l’expérience mobile et les données de l’application.",
    technologies: ["React Native", "Expo", "Firebase"],
    features: ["Suivi de dépenses", "Interface mobile", "Données Firebase", "Architecture cross-platform"],
    image: "/cash-management-app.svg",
    imageKind: "illustration",
    updatedAt: "2026-10-05",
    details: [
      { title: "Du besoin de suivi à une interface mobile", paragraphs: ["Cash Management répond à un usage depuis un smartphone : consulter et suivre ses dépenses dans une application dédiée. Le projet présenté associe une interface React Native, l’environnement Expo et Firebase pour les données.", "Cette combinaison distingue le travail sur les écrans et la navigation du travail sur les informations conservées. Elle constitue un exemple de projet mobile connecté à des données, à examiner pour préparer une application de gestion."] },
      { title: "Préparer votre propre application de gestion", paragraphs: ["Pour une application similaire, le cadrage doit préciser les informations saisies, les comptes qui peuvent les consulter et les changements à synchroniser. Le comportement en cas de perte de connexion, les exports et les notifications sont des besoins à discuter, sans les supposer présents dans ce projet.", "Une demande de devis est plus facile à estimer avec quelques parcours décrits et des exemples de données. Le périmètre peut ensuite distinguer le MVP, les intégrations et les évolutions."] },
    ],
    relatedService: "/application-mobile-casablanca",
  },
  {
    slug: "patient-management",
    title: "Logiciel de gestion de patients",
    category: "Application métier",
    summary: "Une application Electron.js destinée à la gestion de patients dans une interface desktop.",
    context: "Le besoin portait sur un outil métier accessible sur ordinateur pour centraliser des informations liées à la gestion de patients.",
    solution: "Création d’une application desktop avec Electron.js, technologie déjà utilisée dans le parcours professionnel présenté sur le site.",
    technologies: ["Electron.js"],
    features: ["Application desktop", "Gestion de données métier", "Interface dédiée", "Navigation applicative"],
    image: "/patient-management-app.svg",
    imageKind: "illustration",
    relatedService: "/developpement-web-sur-mesure-casablanca",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
