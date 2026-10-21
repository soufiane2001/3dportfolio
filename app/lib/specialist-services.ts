import type { LandingPage } from "./landing-pages";

// Distinct buying decisions, not geographical copies of the general service.
export const specialistServices: LandingPage[] = [
  {
    path: "/creation-site-catalogue", lang: "fr",
    title: "Création de site catalogue avec demande de devis",
    description: "Présentez vos produits sans paiement en ligne : catalogue, fiches, filtres et demande de devis. Création sur mesure avec un développeur freelance.",
    eyebrow: "Catalogue produits et demandes commerciales",
    h1: "Création de site catalogue avec demande de devis",
    intro: "Vos clients doivent choisir des produits, préciser une quantité ou demander une personnalisation avant de connaître le prix ? Un site catalogue organise votre offre et prépare la demande de devis, sans imposer un paiement en ligne.",
    market: "France, Maroc et clientèle francophone à distance",
    updatedAt: "2026-10-21",
    sections: [
      {
        title: "Un catalogue quand la vente commence par une discussion",
        paragraphs: [
          "Un site vitrine explique une activité. Un site catalogue permet aussi de parcourir des références, de comparer leurs caractéristiques et de transmettre une demande précise. Il convient notamment à une offre personnalisable, à des équipements professionnels ou à des produits dont le tarif dépend des quantités et des options.",
          "Le parcours se termine par une demande, pas par une commande confirmée. Vous vérifiez les disponibilités et les conditions, puis vous envoyez une proposition. Si vos prix, votre livraison et votre stock permettent un achat immédiat, une boutique e-commerce peut mieux répondre au besoin.",
        ],
        items: ["Produits personnalisables", "Vente aux professionnels", "Prix dépendant des quantités", "Offres à chiffrer après échange"],
      },
      {
        title: "Des fiches produits qui préparent un devis exploitable",
        paragraphs: [
          "Le cadrage commence par quelques fiches représentatives : référence, photos, description, dimensions, matières et options réellement proposées. Les catégories et les filtres sont choisis selon les critères de vos clients. Une caractéristique absente de vos données ne devient pas un filtre fiable par simple ajout dans le design.",
          "La demande peut porter sur un produit ou sur une sélection de références. Le formulaire rassemble les quantités, les variantes, la personnalisation et les coordonnées utiles. Le message de confirmation explique que votre équipe doit encore étudier la demande ; il ne promet ni disponibilité ni prix avant validation.",
        ],
        items: ["Catégories et fiches détaillées", "Filtres selon vos données", "Sélection de produits si nécessaire", "Formulaire ou contact WhatsApp"],
      },
      {
        title: "Administration, contenus et référencement des produits",
        paragraphs: [
          "Un espace d’administration peut être prévu pour modifier les textes, les images et les références. Avant de choisir un import de fichier, nous examinons votre catalogue existant, la qualité des données et la fréquence des mises à jour. L’import, les documents téléchargeables et la connexion à un logiciel métier sont chiffrés selon le besoin.",
          "Chaque catégorie utile et chaque fiche publiée disposent d’une adresse stable et d’un contenu descriptif. Les liens, les images, les titres et le sitemap sont préparés avec le site. Les combinaisons de filtres sont cadrées pour éviter de multiplier les pages équivalentes ; une refonte prévoit aussi le devenir des anciennes adresses.",
        ],
        items: ["Gestion des références", "Images et descriptifs à préparer", "URLs stables", "Reprise des anciennes adresses"],
      },
      {
        title: "Un exemple du portfolio et les informations à fournir",
        paragraphs: [
          "Dar Mooris, présenté ci-dessous, illustre un parcours de consultation de collections et de personnalisation prolongé par un contact WhatsApp. Cet exemple montre comment préparer une demande commerciale. Il ne constitue pas une démonstration de panier multi-produits, de gestion de stock ou de paiement intégré.",
          "Pour estimer votre catalogue, préparez le nombre de références, les catégories, trois fiches types, les options de personnalisation et la manière dont vous traitez les demandes aujourd’hui. Le devis distingue le catalogue initial, l’administration, les imports, les intégrations et la maintenance. Vous pouvez commencer par un périmètre limité puis ajouter des fonctions selon l’usage.",
        ],
        items: ["Nombre et qualité des fiches", "Quantités et variantes", "Destinataire des demandes", "Administration et évolutions souhaitées"],
      },
    ],
    faqs: [
      { question: "Peut-on créer un catalogue sans afficher de prix ?", answer: "Oui. Les fiches peuvent présenter les caractéristiques et proposer une demande de devis. Le visiteur doit comprendre les informations à transmettre et la prochaine étape ; masquer le prix ne dispense pas d’expliquer clairement l’offre." },
      { question: "Peut-on demander un devis pour plusieurs produits ?", answer: "Oui, une sélection de références avec quantités peut faire partie du périmètre. Elle sert à transmettre une demande à votre équipe et ne confirme pas automatiquement une commande." },
      { question: "WhatsApp suffit-il pour recevoir les demandes ?", answer: "Il peut convenir à des échanges simples. Pour des références nombreuses ou des demandes à distribuer à plusieurs personnes, un formulaire structuré et un suivi interne peuvent être préférables. Le choix dépend de votre organisation." },
      { question: "Combien coûte un site catalogue et peut-il évoluer en boutique ?", answer: "Le budget dépend des fiches, des variantes, des filtres, de l’administration et des intégrations. Un passage à la vente en ligne doit ajouter et tester prix, stock, paiement, livraison et suivi des commandes ; il se prépare dès le cadrage si cette évolution est envisagée." },
    ],
    projectSlugs: ["dar-mooris"],
    related: [
      { href: "/site-ecommerce", label: "Vendre avec un parcours de commande" },
      { href: "/blog/site-vitrine-ou-ecommerce", label: "Comparer vitrine, catalogue et e-commerce" },
      { href: "/blog/cahier-des-charges-site-web", label: "Préparer votre cahier des charges" },
    ],
  },
  {
    path: "/creation-site-web-cabinet-medical", lang: "fr",
    title: "Création de site web pour cabinet médical | Freelance",
    description: "Site vitrine de cabinet médical : présentation du praticien, informations d’accès et liens de rendez-vous. Découvrez un projet du portfolio et préparez votre devis.",
    eyebrow: "Site vitrine pour médecin et cabinet médical",
    h1: "Création de site web pour cabinet médical",
    intro: "Un site de cabinet doit permettre de comprendre votre activité, de trouver les informations pratiques et d’accéder au bon moyen de rendez-vous. Je conçois ce parcours avec des contenus validés par le praticien et une présentation adaptée au mobile.",
    market: "France, Maroc et clientèle francophone à distance",
    updatedAt: "2026-10-21",
    sections: [
      {
        title: "Les informations que le patient vient chercher",
        paragraphs: [
          "Le site présente le praticien, ses domaines d’intervention, l’adresse du cabinet, les horaires et les moyens de contact. Les informations d’accès et les liens de rendez-vous doivent rester faciles à trouver, notamment depuis un téléphone. Le texte est organisé autour de ces besoins, avec des intitulés compréhensibles.",
          "Le parcours, les qualifications, les photographies et les contenus médicaux sont fournis ou validés par le praticien. Nous identifions les pages à créer et les contenus à conserver avant de commencer le design. Les règles de communication applicables à votre activité et à votre pays doivent être validées avec vos interlocuteurs compétents.",
        ],
        items: ["Présentation du praticien", "Domaines d’intervention", "Adresse, horaires et accès", "Rendez-vous et contact"],
      },
      {
        title: "Relier le site à votre organisation des rendez-vous",
        paragraphs: [
          "Si vous utilisez déjà une plateforme de réservation, le site peut orienter les visiteurs vers votre agenda externe. Un lien téléphonique peut aussi être proposé selon le fonctionnement du secrétariat. Le libellé de chaque bouton indique l’action attendue et la destination.",
          "Un agenda intégré, des comptes patients ou le stockage de documents médicaux constituent un autre périmètre. Ils demandent une étude spécifique des accès, des données et des prestataires. Le site vitrine présenté ici n’inclut pas par défaut un dossier patient ni un outil de consultation médicale.",
        ],
        items: ["Lien vers l’agenda existant", "Appel au secrétariat", "Parcours mobile lisible", "Fonctions métier à étudier séparément"],
      },
      {
        title: "Référencement local et reprise d’un site existant",
        paragraphs: [
          "Les coordonnées et les informations pratiques sont cohérentes entre les pages. Les titres, les liens internes et le sitemap aident les moteurs de recherche à comprendre le contenu. Les spécialités et la localisation sont décrites naturellement, sans créer une page identique pour chaque ville.",
          "En cas de refonte, nous recensons les adresses existantes, les pages utiles et les moyens de rendez-vous avant les modifications. Les anciennes URLs sont conservées ou redirigées vers une page équivalente. Les formulaires et les liens de contact sont vérifiés avant publication. Le classement dans les résultats de recherche n’est pas garanti.",
        ],
        items: ["Coordonnées cohérentes", "Titres descriptifs", "Conservation ou redirection des URLs", "Contrôle des liens de rendez-vous"],
      },
      {
        title: "Le cabinet du Dr Nora Boutatss comme exemple",
        paragraphs: [
          "L’étude de cas ci-dessous présente un site organisé autour du médecin, de ses expertises, du cabinet et des informations pratiques. Les visiteurs peuvent accéder aux moyens de rendez-vous, dont un agenda externe. Le portfolio décrit ce périmètre sans attribuer au site une hausse de patientèle ou des fonctions de gestion non documentées.",
          "Pour votre devis, préparez le site actuel s’il existe, les pages souhaitées, les textes validés, les photos disponibles, les langues nécessaires et le lien de réservation utilisé. Nous précisons aussi qui mettra à jour les horaires et les informations du cabinet après la livraison.",
        ],
        items: ["Contenus validés", "Photographies disponibles", "Langues du site", "Responsable des mises à jour"],
      },
    ],
    faqs: [
      { question: "Le site peut-il utiliser mon agenda de réservation actuel ?", answer: "Oui, un lien peut diriger le visiteur vers votre agenda externe. Une intégration plus avancée dépend des possibilités et conditions du fournisseur ; elle est étudiée avant de l’inclure dans le devis." },
      { question: "Rédigez-vous les informations médicales ?", answer: "La structure et la lisibilité peuvent être travaillées avec vous. Les informations médicales, qualifications et affirmations concernant la pratique sont fournies ou validées par le praticien avant publication." },
      { question: "Le site vitrine comprend-il un dossier patient ?", answer: "Non. Un site d’information et de contact est distinct d’un logiciel médical. Toute collecte de documents ou gestion de données de santé demande un cadrage spécifique ; elle n’est pas ajoutée par défaut." },
      { question: "Quel est le budget d’un site de cabinet médical ?", answer: "Le devis dépend du nombre de pages, des langues, des contenus disponibles, de la reprise éventuelle et des intégrations demandées. L’hébergement, la maintenance et les abonnements tiers sont distingués de la création initiale." },
    ],
    projectSlugs: ["dr-boutatss-nora"],
    related: [
      { href: "/creation-site-web", label: "Création de site professionnel" },
      { href: "/maintenance-site-web", label: "Mises à jour et maintenance du site" },
      { href: "/blog/cahier-des-charges-site-web", label: "Préparer les contenus et le périmètre" },
    ],
  },
];
