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
    updatedAt: "2026-10-05",
    title: "Site e-commerce avec paiement à la livraison",
    category: "E-commerce",
    summary: "Une plateforme de vente en ligne avec catalogue, commande et paiement à la livraison.",
    context: "Le projet présent dans le portfolio avait pour objectif de proposer une expérience d’achat en ligne complète adaptée à la vente avec paiement à la livraison.",
    solution: "Développement d’une interface e-commerce reliée à une base MySQL, avec un parcours centré sur la consultation des produits et la commande.",
    technologies: ["PHP", "CSS", "MySQL"],
    features: ["Catalogue produits", "Parcours de commande", "Paiement à la livraison", "Base de données MySQL", "Interface responsive"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369049/Capture_d_%C3%A9cran_2026-05-10_022349_pn3hp8.png",
    website: "https://bdmstore.store/ecom/index.php",
    relatedService: "/site-ecommerce",
  },
  {
    slug: "reby-art",
    updatedAt: "2026-10-05",
    title: "Reby Art — Portfolio d’artiste",
    category: "Site vitrine",
    summary: "Un portfolio élégant conçu pour présenter le travail d’un peintre français.",
    context: "L’enjeu était de traduire une identité artistique en une expérience web claire, en laissant les œuvres et l’univers du peintre occuper la place centrale.",
    solution: "Création d’une interface React qui structure la présentation de l’artiste et de ses réalisations avec une navigation adaptée au contenu visuel.",
    technologies: ["React", "JavaScript"],
    features: ["Présentation de l’artiste", "Galerie de réalisations", "Design responsive", "Navigation claire"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369125/Capture_d_%C3%A9cran_2026-05-10_022508_ecupwg.png",
    website: "https://rebyart.vercel.app/",
    relatedService: "/creation-site-web",
  },
  {
    slug: "highup-counselling",
    updatedAt: "2026-10-05",
    title: "HighUp Counselling — Site de services",
    category: "Site professionnel",
    summary: "Un site professionnel pour présenter des services de psychologie et faciliter la compréhension de l’offre.",
    context: "Le site devait rendre les services de counselling accessibles et rassurants, avec une présentation professionnelle adaptée au public de l’activité.",
    solution: "Conception d’un site Wix structuré autour de la présentation des services, de l’identité du cabinet et de la prise de contact.",
    technologies: ["Wix"],
    features: ["Présentation des services", "Contenu professionnel", "Responsive", "Prise de contact"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369183/Capture_d_%C3%A9cran_2026-05-10_022608_m8mer3.png",
    website: "https://www.highupcounselling.ca/",
    relatedService: "/creation-site-web",
  },
  {
    slug: "horea-formation",
    updatedAt: "2026-10-05",
    title: "Horea Formation — Centre de formation",
    category: "Site vitrine",
    summary: "Un site WordPress destiné à présenter un centre de formation et ses activités.",
    context: "Le centre avait besoin d’une présence web permettant aux visiteurs de comprendre son offre de formation et d’accéder facilement aux informations essentielles.",
    solution: "Mise en place d’un site WordPress avec une organisation éditoriale adaptée à la présentation du centre et de ses formations.",
    technologies: ["WordPress"],
    features: ["Présentation du centre", "Offre de formations", "Pages de contenu", "Responsive"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778369246/Capture_d_%C3%A9cran_2026-05-10_022707_yrmkgs.png",
    website: "https://www.horea-formation.com/",
    relatedService: "/creation-site-web",
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
    relatedService: "/developpeur-application-mobile",
  },
  {
    slug: "patient-management",
    updatedAt: "2026-10-05",
    title: "Logiciel de gestion de patients",
    category: "Application métier",
    summary: "Une application Electron.js destinée à la gestion de patients dans une interface desktop.",
    context: "Le besoin portait sur un outil métier accessible sur ordinateur pour centraliser des informations liées à la gestion de patients.",
    solution: "Création d’une application desktop avec Electron.js, technologie déjà utilisée dans le parcours professionnel présenté sur le site.",
    technologies: ["Electron.js"],
    features: ["Application desktop", "Gestion de données métier", "Interface dédiée", "Navigation applicative"],
    image: "/patient-management-app.svg",
    imageKind: "illustration",
    relatedService: "/developpement-web-sur-mesure",
  },
  {
    slug: "dar-mooris",
    title: "Dar Mooris — Site de broderie et personnalisation",
    category: "Site commercial",
    summary: "Présentation du site Dar Mooris : cadeaux textiles personnalisés, offre pour entreprises et parcours de demande sur WhatsApp.",
    context: "Dar Mooris présente une activité de broderie et de personnalisation à Casablanca. Le site doit expliquer l’offre aux particuliers comme aux entreprises, puis orienter le visiteur vers une demande adaptée à son projet.",
    solution: "Une vitrine PHP organise les cadeaux personnalisés, les collections et les prestations pour entreprises. La présentation du processus — choix du produit, personnalisation et validation — aide le visiteur à préparer sa demande.",
    technologies: ["PHP"],
    features: ["Présentation des collections", "Offre pour entreprises", "Explication du processus de personnalisation", "Accès au contact WhatsApp"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1774035266/Capture_d_%C3%A9cran_2026-03-20_213032_ksgiwn.png",
    website: "https://darmooris.ma/",
    relatedService: "/creation-site-web",
    updatedAt: "2026-10-05",
    details: [
      { title: "Deux publics, des demandes différentes", paragraphs: ["Un particulier peut rechercher un cadeau personnalisé, tandis qu’une entreprise prépare des uniformes ou un événement. La navigation sépare ces besoins pour rendre les informations utiles plus faciles à trouver.", "Le contact WhatsApp prolonge la consultation du site : le visiteur peut décrire sa personnalisation et échanger avec l’atelier. Ce parcours constitue une demande de contact, et ne doit pas être confondu avec une commande payée en ligne."] },
    ],
  },
  {
    slug: "gamlastan",
    title: "Gamlastan — Interface de boutique avec Next.js",
    category: "Interface e-commerce",
    summary: "Projet Gamlastan présenté dans mon portfolio : une interface de boutique développée avec Next.js, pensée pour différents écrans.",
    context: "Gamlastan est un projet de boutique présenté dans le portfolio. Le travail porte sur une expérience de consultation cohérente, avec une présentation visuelle des produits adaptée aux différents formats d’écran.",
    solution: "Développement de l’interface avec Next.js. La capture du projet permet d’examiner l’organisation visuelle de la boutique et la place accordée aux produits.",
    technologies: ["Next.js"],
    features: ["Interface de boutique", "Présentation visuelle des produits", "Mise en page responsive"],
    image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1775161310/Capture_d_%C3%A9cran_2026-04-02_231851_senzhp.png",
    relatedService: "/developpeur-nextjs",
    updatedAt: "2026-10-05",
    details: [
      { title: "Cadrer une interface de boutique", paragraphs: ["Pour préparer un projet comparable, il faut préciser les catégories, les informations à montrer sur chaque produit et les actions attendues sur téléphone comme sur ordinateur. La capture sert de point de départ pour discuter de la hiérarchie des contenus.", "Le paiement, les stocks, les livraisons et les outils de gestion doivent être cadrés séparément. Leur présence dans une nouvelle boutique dépend du périmètre convenu, et ne se déduit pas de cette présentation d’interface."] },
    ],
  },
  {
    slug: "dr-boutatss-nora",
    title: "Dr Nora Boutatss — Création d’un site de cabinet médical",
    category: "Site professionnel",
    summary: "Site du cabinet du Dr Nora Boutatss : présentation des expertises, informations pratiques et accès aux moyens de prise de rendez-vous.",
    context: "Le cabinet a besoin d’un site qui présente le médecin, ses domaines d’intervention et les informations nécessaires à une visite. L’adresse, les moyens de contact et la prise de rendez-vous doivent être faciles à trouver.",
    solution: "Organisation du site autour des expertises, du parcours du médecin, du cabinet et des informations pratiques. Les appels à l’action permettent de choisir entre un agenda externe, le téléphone et WhatsApp.",
    technologies: ["Site vitrine", "Responsive", "SEO local"],
    features: ["Présentation du médecin et des expertises", "Informations d’accès au cabinet", "Liens vers les moyens de rendez-vous", "Présentation du cabinet"],
    image: "/project-dr-boutatss-nora.png",
    website: "https://drboutatssnora.com/",
    relatedService: "/creation-site-web",
    updatedAt: "2026-10-05",
    details: [
      { title: "Un parcours centré sur les informations pratiques", paragraphs: ["Les visiteurs n’arrivent pas tous avec le même besoin : certains souhaitent découvrir le cabinet, d’autres connaître son adresse ou prendre rendez-vous. La navigation et les liens de contact donnent accès à ces informations sans les enfouir dans une longue présentation.", "Cette étude de cas porte sur le site et son organisation. Un lien vers un agenda externe facilite l’accès à la réservation ; il ne constitue pas un système de gestion médicale intégré au site."] },
    ],
  },
  {
    slug: "pizza-napoli-toul",
    title: "Pizza Napoli Toul — Création d’un site de restaurant",
    category: "Site vitrine en France",
    summary: "Site de Pizza Napoli à Toul : présentation du menu, horaires, localisation et accès au téléphone pour préparer une visite ou une commande.",
    context: "Une personne qui cherche un restaurant a besoin de consulter la carte, de connaître les horaires et de trouver rapidement l’adresse ou le numéro de téléphone. Le site de Pizza Napoli Toul réunit ces informations dans une présentation visuelle de la pizzeria.",
    solution: "Une vitrine responsive met en avant les pizzas et donne accès au menu, à la présentation du restaurant, à sa localisation et au contact. Les informations pratiques accompagnent la découverte de l’offre.",
    technologies: ["Web design", "Responsive", "SEO local"],
    features: ["Présentation de la carte", "Horaires et adresse", "Accès au téléphone", "Navigation vers le menu et le contact"],
    image: "/project-pizza-napoli-toul.png",
    website: "https://pizzanapoli-toul.fr/",
    relatedService: "/france/creation-site-web",
    updatedAt: "2026-10-05",
    details: [
      { title: "Passer de la découverte à une action utile", paragraphs: ["Les visuels donnent un aperçu de l’offre, puis les liens vers le menu et le téléphone permettent au visiteur de poursuivre son parcours. Sur mobile, ces actions doivent rester faciles à utiliser et les informations pratiques lisibles.", "Le site sert de vitrine au restaurant. La présentation du menu et un lien téléphonique ne suffisent pas à conclure qu’un paiement ou une commande automatisée sont intégrés ; ces fonctionnalités relèvent d’un périmètre distinct."] },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
