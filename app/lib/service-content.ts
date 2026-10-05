import type { LandingPage } from "./landing-pages";

type ServiceContent = Pick<LandingPage, "description" | "sections" | "faqs" | "related"> & {
  projectSlugs: string[];
};

// Each service answers a different buying decision; shared delivery copy belongs
// in a short process section, rather than replacing the service explanation.
export const serviceContent: Record<string, ServiceContent> = {
  "developpeur-web-freelance": {
    description: "Développeur web freelance : sites, applications et renfort React ou PHP. Découvrez mes projets et définissons votre périmètre de travail.",
    sections: [
      { title: "Création complète ou renfort de votre équipe", paragraphs: ["Pour un nouveau projet, nous définissons d’abord ce que vos visiteurs doivent pouvoir faire : comprendre une offre, demander un devis, commander ou utiliser un outil métier. Cette décision permet de choisir entre un site de contenu, un e-commerce et une application.", "Pour une équipe existante, la mission peut porter sur une interface React, un backend PHP, une intégration API ou une correction de performance. L’audit du dépôt et du déploiement précède l’estimation : il permet d’identifier les conventions, les dépendances et les risques de reprise."], items: ["Création ou refonte", "Mission frontend ou backend", "Audit de code avant reprise", "Périmètre et validations écrits"] },
      { title: "Ce qu’un devis doit permettre de comparer", paragraphs: ["Un devis utile précise les écrans, les fonctionnalités, les contenus à fournir et les éléments livrés. Il distingue le développement initial de l’hébergement, de la maintenance et des demandes futures.", "Avant de choisir votre prestataire, examinez les réalisations qui ressemblent à votre besoin. Un portfolio artistique, une boutique et un logiciel de gestion ne demandent pas les mêmes compétences ni les mêmes vérifications."], items: ["Accès et propriété du code", "Critères de réception", "Responsabilité des contenus", "Conditions de maintenance"] },
    ],
    faqs: [
      { question: "Quand choisir un freelance plutôt qu’une agence ?", answer: "Un freelance convient à une mission avec un périmètre clair et un interlocuteur technique direct. Si votre projet exige plusieurs spécialités à temps plein en parallèle, une équipe ou une agence peut être plus adaptée. Nous vérifions la capacité nécessaire avant de démarrer." },
      { question: "Que transmettre pour estimer une reprise de projet ?", answer: "Le dépôt de code, une présentation des fonctionnalités, les erreurs observées et la configuration de déploiement. Les accès sont partagés par un canal adapté, sans publier de secrets dans un formulaire ou une issue." },
    ],
    projectSlugs: ["reby-art", "site-ecommerce", "patient-management"],
    related: [{ href: "/a-propos", label: "Mon parcours de développeur" }, { href: "/developpement-web-sur-mesure", label: "Développement d’applications sur mesure" }],
  },
  "creation-site-web": {
    description: "Création de site web professionnel : structure, contenus, design responsive et mise en ligne. Comparez les solutions et demandez un devis adapté.",
    sections: [
      { title: "Site vitrine, boutique ou application : choisir le bon périmètre", paragraphs: ["Un site vitrine présente vos services et facilite la prise de contact. Une boutique ajoute un catalogue et un parcours de commande. Une application web gère des actions et des données propres à votre activité. Le choix dépend de ce que vos utilisateurs doivent accomplir, pas du nombre de pages annoncé.", "Nous listons les pages essentielles : accueil, services, réalisations, présentation et contact. Les menus, les liens et les appels à l’action doivent permettre de passer d’une question à une réponse, puis à une demande utile."], items: ["Plan des pages", "Navigation mobile", "Formulaires et contact", "Contenus et images à préparer"] },
      { title: "Préparer une mise en ligne qui conserve vos acquis", paragraphs: ["Pour une refonte, les URLs existantes, les pages recevant du trafic et les formulaires sont inventoriés avant de changer la structure. Une page remplacée doit mener vers son équivalent ; toutes les anciennes adresses ne doivent pas renvoyer indistinctement vers l’accueil.", "La réception couvre les principales tailles d’écran, les liens, l’envoi des formulaires et les informations affichées. L’indexabilité et les métadonnées sont vérifiées sur le domaine final, puis les accès et la procédure de mise à jour sont remis selon le périmètre convenu."], items: ["Inventaire des anciennes URLs", "Recette mobile", "Contrôle sur le domaine final", "Prise en main et maintenance"] },
    ],
    faqs: [
      { question: "Dois-je fournir les textes et les images ?", answer: "Le devis précise qui prépare chaque contenu et qui le valide. Préparez vos services, coordonnées, réalisations et images autorisées. Un contenu manquant ou non validé peut retarder la mise en ligne." },
      { question: "Un CMS ou un site sur mesure est-il préférable ?", answer: "Un CMS peut convenir si vous publiez régulièrement et souhaitez une interface de gestion standard. Le sur-mesure répond à des parcours ou intégrations spécifiques. Le choix se fait selon votre autonomie, vos fonctionnalités et le budget de maintenance." },
    ],
    projectSlugs: ["reby-art", "horea-formation", "highup-counselling"],
    related: [{ href: "/site-vitrine-casablanca", label: "Créer un site vitrine" }, { href: "/site-ecommerce", label: "Créer une boutique en ligne" }, { href: "/blog/prix-creation-site-web-maroc-2026", label: "Ce qui détermine le budget d’un site" }],
  },
  "developpement-web-sur-mesure": {
    description: "Développement web sur mesure : SaaS, portails clients et outils métier avec React, PHP ou Laravel. Cadrage du MVP, données et intégrations.",
    sections: [
      { title: "Transformer un processus métier en application", paragraphs: ["Un outil sur mesure commence par les tâches à simplifier : saisie, validation, consultation, suivi ou export. Nous décrivons les utilisateurs, leurs permissions et les données qu’ils manipulent avant de dessiner le tableau de bord.", "Pour un SaaS, le cadrage distingue le fonctionnement commun des espaces propres à chaque client. Pour un portail, il précise les échanges avec votre CRM, votre comptabilité ou une API existante. Ces décisions structurent le modèle de données et les contrôles d’accès."], items: ["Utilisateurs et rôles", "Modèle de données", "API et intégrations", "MVP et évolutions"] },
      { title: "Valider un MVP avant d’élargir les fonctionnalités", paragraphs: ["Une première version doit permettre d’exécuter un parcours utile de bout en bout. Nous définissons des exemples de données et des critères de réception pour les cas normaux, les erreurs et les accès non autorisés.", "Le lancement prévoit aussi les sauvegardes, la configuration des environnements et la documentation nécessaire à la reprise. Les exports, les statistiques avancées et les automatisations supplémentaires peuvent être livrés ensuite, selon les retours des utilisateurs."], items: ["Parcours prioritaires", "Tests de permissions", "Sauvegarde et restauration", "Documentation technique"] },
    ],
    faqs: [
      { question: "Pouvez-vous développer une plateforme SaaS sur mesure au Maroc ?", answer: "Oui, une plateforme SaaS peut être cadrée comme une application métier avec ses utilisateurs, ses espaces clients et ses intégrations. Le devis doit préciser le modèle d’accès, les fonctionnalités du MVP et les besoins de maintenance avant le choix de l’architecture." },
      { question: "Faut-il tout développer dans la première version ?", answer: "Non. Nous séparons les fonctions nécessaires au premier parcours des options à valider plus tard. Une version plus petite est utile si elle permet déjà de tester le fonctionnement réel avec vos utilisateurs." },
    ],
    projectSlugs: ["patient-management", "site-ecommerce", "cash-management-app"],
    related: [{ href: "/developpeur-laravel", label: "Backend Laravel et API métier" }, { href: "/developpeur-react", label: "Interfaces React" }, { href: "/developpement-web-sur-mesure-casablanca", label: "Applications web à Casablanca" }],
  },
  "developpeur-react": {
    description: "Développeur React freelance : interfaces TypeScript, intégration API et reprise d’applications. Consultez un projet React et préparez votre mission.",
    sections: [
      { title: "Des interfaces React qui gèrent les vrais états de votre application", paragraphs: ["Une interface ne se limite pas à l’écran où toutes les données sont disponibles. Elle doit expliquer le chargement, une liste vide, une erreur réseau et le résultat d’une action. Je structure les composants autour de ces états et du parcours de l’utilisateur.", "L’intégration avec votre API précise les formats de données, les filtres, la pagination et les permissions. TypeScript aide à rendre ces contrats lisibles, tandis que les formulaires donnent un retour compréhensible en cas de saisie invalide."], items: ["Composants réutilisables", "Contrats API et TypeScript", "États de chargement et d’erreur", "Formulaires accessibles"] },
      { title: "Reprendre un frontend sans réécrire ce qui fonctionne", paragraphs: ["L’audit repère les composants difficiles à maintenir, les appels réseau redondants et les dépendances inutilisées. Les changements sont ensuite découpés pour préserver les parcours existants et éviter une refonte générale sans besoin démontré.", "Pour des pages publiques qui doivent être trouvées sur Google, nous examinons le rendu HTML et le besoin d’un framework comme Next.js. Pour un dashboard privé, l’effort se concentre plutôt sur les interactions, les permissions et la vitesse des écrans."], items: ["Audit de composants", "Mesure avant optimisation", "Recette des parcours existants", "Rendu des pages publiques"] },
    ],
    faqs: [
      { question: "React suffit-il pour un site qui doit être référencé ?", answer: "React peut servir à construire un site public, mais son mode de rendu compte. Nous vérifions que les contenus et les liens importants sont accessibles, puis choisissons le rendu serveur ou statique lorsque le projet le nécessite." },
      { question: "Pouvez-vous intégrer mes maquettes à une API existante ?", answer: "Oui. La mission précise les écrans, leurs états, la documentation API et les interactions attendues. Les cas d’erreur et les permissions font partie du cadrage, au même titre que les maquettes." },
    ],
    projectSlugs: ["reby-art"],
    related: [{ href: "/portfolio/reby-art", label: "Reby Art : un portfolio réalisé avec React" }, { href: "/developpeur-nextjs", label: "Rendu et SEO avec Next.js" }, { href: "/blog/typescript-guide-pratique-react", label: "TypeScript dans une application React" }],
  },
  "developpeur-nextjs": {
    description: "Développeur Next.js freelance : sites indexables, App Router et applications React. Architecture, images, métadonnées et déploiement adaptés au projet.",
    sections: [
      { title: "Choisir le rendu selon le contenu de chaque route", paragraphs: ["Une page de service et un espace client n’ont pas les mêmes contraintes. Les contenus publics peuvent être générés ou mis en cache, tandis qu’un écran personnalisé doit protéger les données et fournir les informations propres à la session.", "Avec l’App Router, les composants serveur servent les contenus et les composants client portent les interactions qui en ont besoin. Cette séparation limite le JavaScript envoyé au navigateur et garde les URLs, les titres et les liens compréhensibles."], items: ["App Router", "Server Components", "Cache et revalidation", "Composants client ciblés"] },
      { title: "Vérifier le site déployé, pas seulement le code", paragraphs: ["Les contrôles SEO portent sur les réponses HTTP, le HTML livré, les canonical, les langues et le sitemap. Une bonne configuration en développement ne suffit pas si le domaine de production, les redirections ou les variables d’environnement diffèrent.", "La performance est mesurée sur des pages représentatives. Nous examinons notamment le contenu principal, les images, les ressources chargées et les interactions, puis choisissons les corrections qui répondent aux problèmes observés."], items: ["Métadonnées par route", "Images avec tailles adaptées", "Redirections de production", "Mesure des Core Web Vitals"] },
    ],
    faqs: [
      { question: "Next.js garantit-il un bon référencement ?", answer: "Non. Le framework fournit des outils de rendu, de métadonnées et d’optimisation, mais leur mise en œuvre, le contenu, les liens et la concurrence restent déterminants. La validation doit porter sur le site publié." },
      { question: "Pouvez-vous reprendre un projet Next.js existant ?", answer: "Oui, après examen de la version, des routes, des dépendances et de l’hébergement. L’estimation distingue les corrections nécessaires des évolutions facultatives." },
    ],
    projectSlugs: ["reby-art"],
    related: [{ href: "/blog/nextjs-seo-app-router-2026", label: "SEO et App Router" }, { href: "/seo", label: "Audit technique du site" }, { href: "/maintenance-site-web", label: "Maintenance et mises à jour" }],
  },
  "developpeur-php": {
    description: "Développeur PHP freelance : sites dynamiques, MySQL, API et maintenance. Analyse de l’existant et développement backend selon vos besoins.",
    sections: [
      { title: "Faire évoluer un site PHP et sa base de données", paragraphs: ["La reprise commence par les parcours importants, le schéma MySQL et la façon dont les pages lisent ou modifient les données. Nous identifions les validations, les accès, les requêtes lentes et les dépendances avant de proposer une correction.", "Une évolution peut concerner une commande, un formulaire, un back-office ou un export. Les requêtes sont paramétrées et les contrôles nécessaires sont appliqués côté serveur, même si le navigateur propose déjà une validation."], items: ["PHP et MySQL", "Validation serveur", "Requêtes paramétrées", "Administration et exports"] },
      { title: "Relier le backend aux outils de votre activité", paragraphs: ["Une intégration API doit définir ce qui se passe en cas de délai, d’erreur ou de requête répétée. Les formats, les droits d’accès et les échanges sont documentés pour que le frontend et le backend restent cohérents.", "Pour une modernisation, le périmètre est établi après vérification de l’hébergement et de la version PHP. Les changements de structure ou de framework sont proposés lorsqu’ils apportent un bénéfice concret à la maintenance ou aux fonctionnalités."], items: ["Contrats API", "Gestion des erreurs", "Compatibilité de l’hébergement", "Migration progressive"] },
    ],
    faqs: [
      { question: "Faut-il passer à Laravel pour maintenir un site PHP ?", answer: "Pas systématiquement. Un site PHP existant peut être corrigé ou amélioré sans changer de framework. Laravel devient pertinent lorsque ses conventions et ses outils répondent à la complexité du projet." },
      { question: "Comment préparer un audit PHP et MySQL ?", answer: "Fournissez une description des problèmes, un accès au code et un environnement de test. Une copie adaptée des données permet de reproduire les erreurs sans travailler directement sur la production." },
    ],
    projectSlugs: ["site-ecommerce"],
    related: [{ href: "/portfolio/site-ecommerce", label: "Une boutique PHP et MySQL" }, { href: "/developpeur-laravel", label: "Applications structurées avec Laravel" }, { href: "/blog/mysql-optimisation-requetes", label: "Comprendre les requêtes MySQL" }],
  },
  "developpeur-laravel": {
    description: "Développeur Laravel freelance : API, back-offices et applications métier. Modèle de données, permissions et intégrations cadrés avant développement.",
    sections: [
      { title: "Organiser les données et les permissions avant les écrans", paragraphs: ["Une application Laravel doit refléter vos règles métier : qui peut consulter, créer, modifier ou valider une information ? Nous définissons ces règles et les relations entre données avant de développer les écrans d’administration.", "Les endpoints sont conçus pour le frontend qui les consomme, avec une validation des entrées, des réponses d’erreur cohérentes et des contrôles d’autorisation. Les migrations rendent les changements de structure suivables dans le dépôt."], items: ["Modèle de données et migrations", "Authentification", "Politiques d’accès", "Validation et réponses API"] },
      { title: "Prévoir les traitements et l’exploitation", paragraphs: ["Un import, un envoi d’e-mail ou une synchronisation externe peut nécessiter un traitement différé. Le cadrage précise les reprises en cas d’échec, la journalisation et les limites de l’hébergement.", "Les scénarios critiques sont vérifiés avant livraison : accès interdit, données invalides, opération répétée et indisponibilité d’un service tiers. La documentation indique comment configurer et déployer l’application."], items: ["Tâches et traitements différés", "Tests des règles métier", "Intégrations externes", "Configuration et déploiement"] },
    ],
    faqs: [
      { question: "Laravel peut-il alimenter une interface React ou une application mobile ?", answer: "Oui. Laravel peut fournir une API consommée par React ou React Native. L’authentification, les formats de données et les droits sont définis conjointement pour éviter des comportements différents entre les interfaces." },
      { question: "Pouvez-vous faire évoluer une application Laravel sans migration complète ?", answer: "Oui, si l’état du code et des dépendances le permet. Un audit distingue les corrections ciblées, les mises à jour nécessaires et les changements d’architecture éventuels." },
    ],
    projectSlugs: ["site-ecommerce", "patient-management"],
    related: [{ href: "/blog/laravel-api-rest-bonnes-pratiques", label: "Conception d’une API Laravel" }, { href: "/developpement-web-sur-mesure", label: "Cadrage d’une application métier" }],
  },
  "developpeur-application-mobile": {
    description: "Développement d’applications mobiles React Native et Expo : MVP, interfaces et connexion API. Découvrez l’application de gestion de dépenses.",
    sections: [
      { title: "Définir un parcours mobile utile sur iOS et Android", paragraphs: ["Une application mobile commence par un usage précis : consulter des données, enregistrer une information ou suivre une activité depuis un téléphone. Nous définissons les écrans essentiels, les permissions et les conditions de connexion avant d’ajouter des fonctions secondaires.", "React Native et Expo permettent de partager une partie importante du code entre plateformes. Certaines intégrations restent propres à iOS ou Android ; elles sont identifiées dans le périmètre et vérifiées sur des appareils représentatifs."], items: ["Parcours et navigation", "MVP mobile", "Connexion API ou Firebase", "Vérification sur appareils"] },
      { title: "Une réalisation à examiner : la gestion de dépenses", paragraphs: ["Le portfolio présente Cash Management, une application de suivi des dépenses développée avec React Native, Expo et Firebase. Elle illustre un projet mobile relié à une source de données plutôt qu’un simple assemblage d’écrans.", "Pour votre projet, le cadrage précise les comptes, la synchronisation, les données à conserver et le comportement attendu en cas de perte de connexion. Les notifications ou fonctions hors ligne sont des options à définir, et non des fonctions incluses par défaut."], items: ["Données et synchronisation", "États réseau", "Comptes et droits à définir", "Builds et procédure de livraison"] },
    ],
    faqs: [
      { question: "Le même code fonctionne-t-il partout ?", answer: "Une grande partie du code peut être partagée, mais chaque plateforme doit être testée. Les permissions, les intégrations natives et les exigences de publication peuvent demander un travail spécifique." },
      { question: "La publication sur les stores est-elle incluse ?", answer: "Le devis précise les builds, les comptes à fournir et l’accompagnement à la soumission. L’acceptation dépend des règles et de la validation de chaque store ; elle ne peut pas être garantie." },
    ],
    projectSlugs: ["cash-management-app"],
    related: [{ href: "/portfolio/cash-management-app", label: "Cash Management : React Native, Expo et Firebase" }, { href: "/application-mobile-casablanca", label: "Développement mobile à Casablanca" }, { href: "/blog/prix-application-mobile-maroc-2026", label: "Préparer le budget d’une application mobile" }],
  },
  "site-ecommerce": {
    description: "Création de site e-commerce : catalogue, commandes et administration. Définissons les modes de paiement, la livraison et le périmètre de votre boutique.",
    sections: [
      { title: "Construire le parcours du produit à la commande", paragraphs: ["Le catalogue doit permettre de comprendre le produit, ses variantes, son prix et sa disponibilité. Le parcours précise les informations nécessaires à la commande et explique les modalités de livraison avant la validation.", "Un paiement en ligne, un paiement à la livraison et une demande de devis sont des flux différents. Le choix dépend de votre organisation et des services disponibles, puis les cas d’erreur et les confirmations sont prévus pour chaque mode retenu."], items: ["Produits et variantes", "Panier et validation", "Paiement selon le périmètre", "Livraison et confirmations"] },
      { title: "Une boutique doit aussi fonctionner pour son gestionnaire", paragraphs: ["Le back-office permet de suivre les commandes et de tenir le catalogue à jour selon les fonctions convenues. Nous clarifions les statuts, les exports et les personnes autorisées à intervenir avant de développer l’administration.", "Pour le référencement, les fiches produits et les catégories répondent à des besoins distincts. Les filtres, les variantes et les produits retirés sont examinés pour éviter des URLs inutiles ou des liens cassés."], items: ["Gestion des commandes", "Administration du catalogue", "Catégories et fiches utiles", "Contrôle des filtres et des URLs"] },
    ],
    faqs: [
      { question: "Pouvez-vous prévoir le paiement à la livraison ?", answer: "Oui. Le portfolio contient une boutique PHP et MySQL avec ce mode de commande. Le projet doit préciser la confirmation, les informations client et le suivi des commandes selon votre activité." },
      { question: "La gestion des stocks et le paiement en ligne sont-ils inclus ?", answer: "Ils doivent être précisés dans le devis. Les règles de stock, le prestataire de paiement et les intégrations peuvent changer sensiblement le périmètre et les tests nécessaires." },
    ],
    projectSlugs: ["site-ecommerce"],
    related: [{ href: "/portfolio/site-ecommerce", label: "Boutique avec paiement à la livraison" }, { href: "/creation-site-ecommerce-casablanca", label: "E-commerce à Casablanca" }, { href: "/blog/site-vitrine-ou-ecommerce", label: "Site vitrine ou e-commerce : choisir" }],
  },
  "seo": {
    description: "Audit SEO technique : indexation, contenus, liens internes et performance. Obtenez des corrections priorisées et un suivi des pages dans Search Console.",
    sections: [
      { title: "Distinguer un problème d’indexation d’un problème de position", paragraphs: ["Une page absente de Google, une page indexée sans impressions et une page visible sans clics ne demandent pas la même intervention. L’analyse croise les réponses HTTP, les canonical, le contenu rendu et les rapports de Search Console.", "Le diagnostic vérifie les URLs effectivement retenues par Google et les requêtes associées aux pages. Les recommandations portent ensuite sur un problème identifié : blocage de crawl, doublon, intention mal servie, liens insuffisants ou présentation peu claire dans les résultats."], items: ["Inspection des URLs", "Indexation et canonical", "Requêtes par page", "Titre et contenu principal"] },
      { title: "Prioriser les corrections et mesurer leurs effets", paragraphs: ["Le livrable distingue les erreurs bloquantes des améliorations éditoriales et des optimisations de performance. Chaque recommandation indique la page concernée, le changement attendu et une vérification après publication.", "Le suivi compare les impressions, les clics et les positions sur les mêmes pages et requêtes. La position moyenne globale reste un indicateur agrégé : elle peut varier parce que le site apparaît sur de nouvelles recherches, même si des pages importantes progressent."], items: ["Plan de corrections par priorité", "Maillage entre pages utiles", "Mesure de performance", "Comparaison par page et requête"] },
    ],
    faqs: [
      { question: "Un audit SEO comprend-il les corrections ?", answer: "Le périmètre distingue le diagnostic, le plan d’action et l’implémentation. Les corrections peuvent être réalisées dans une mission séparée ou incluses lorsque le devis le précise." },
      { question: "Pouvez-vous garantir une place dans le top 10 ?", answer: "Non. Le travail porte sur les éléments contrôlables du site et sur un suivi des résultats. Les positions dépendent aussi des autres sites, de l’autorité et de l’évaluation de Google." },
    ],
    projectSlugs: ["reby-art", "horea-formation"],
    related: [{ href: "/casablanca/seo", label: "Consultant SEO à Casablanca" }, { href: "/blog/seo-site-entreprise-maroc", label: "Diagnostiquer la visibilité d’un site au Maroc" }, { href: "/blog/nextjs-seo-app-router-2026", label: "SEO technique avec Next.js" }],
  },
  "maintenance-site-web": {
    description: "Maintenance de site web : corrections, mises à jour et évolutions. Audit de l’existant, environnement de test et interventions selon un périmètre convenu.",
    sections: [
      { title: "Stabiliser un site avant de le faire évoluer", paragraphs: ["La maintenance commence par un inventaire du code, de l’hébergement, des accès et des dépendances. Les problèmes sont reproduits sur un environnement de test lorsque possible, puis les corrections sont classées selon leur impact sur les utilisateurs.", "Une erreur de formulaire, une commande impossible et un défaut visuel n’ont pas la même priorité. Nous convenons des parcours critiques et du mode de validation avant de déployer un changement."], items: ["Audit de l’existant", "Reproduction des erreurs", "Environnement de test", "Validation des parcours critiques"] },
      { title: "Encadrer les mises à jour et les demandes nouvelles", paragraphs: ["Une mise à jour de dépendance est vérifiée avec les fonctionnalités qui en dépendent. Les sauvegardes et une procédure de retour arrière sont définies selon l’infrastructure, pour éviter de découvrir les contraintes au moment d’un incident.", "Les évolutions fonctionnelles sont estimées séparément des corrections. Le contrat précise les horaires de prise en charge, les limites et les responsabilités ; une disponibilité permanente n’est pas supposée."], items: ["Dépendances et compatibilité", "Sauvegardes", "Retour arrière", "Périmètre et disponibilité convenus"] },
    ],
    faqs: [
      { question: "Pouvez-vous maintenir un site réalisé par un autre développeur ?", answer: "Oui, après un audit permettant de comprendre son fonctionnement et ses risques. La reprise exige des accès au code, à l’hébergement et aux services nécessaires." },
      { question: "La maintenance inclut-elle de nouvelles fonctionnalités ?", answer: "Cela dépend du contrat. Les corrections, les mises à jour et les évolutions doivent être distinguées pour connaître le travail inclus et les demandes à estimer." },
    ],
    projectSlugs: [],
    related: [{ href: "/developpeur-php", label: "Maintenance PHP et MySQL" }, { href: "/developpeur-nextjs", label: "Reprise d’un site Next.js" }, { href: "/seo", label: "Vérifier les effets SEO d’une refonte" }],
  },
};
