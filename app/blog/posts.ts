export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  image: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "react-native-expo-guide-2026",
    title: "Créer une application mobile avec React Native & Expo en 2026",
    excerpt: "Découvrez comment développer une application mobile cross-platform performante avec React Native et Expo, de la configuration initiale au déploiement.",
    date: "2026-05-10",
    readTime: 6,
    tags: ["React Native", "Expo", "Mobile", "JavaScript"],
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    content: `
<h2>Pourquoi React Native & Expo ?</h2>
<p>React Native permet de créer des applications mobiles iOS et Android avec une seule base de code JavaScript/TypeScript. Associé à Expo, le processus de développement devient encore plus rapide grâce à un écosystème riche et un workflow simplifié.</p>

<h2>Installation et configuration</h2>
<p>Pour démarrer un nouveau projet Expo, il suffit d'exécuter :</p>
<pre><code>npx create-expo-app MonApp --template blank-typescript</code></pre>
<p>Cette commande crée une structure de projet prête à l'emploi avec TypeScript, ce qui améliore la maintenabilité du code sur le long terme.</p>

<h2>Structure du projet</h2>
<p>Un projet React Native bien structuré sépare clairement les composants, les écrans, les services et les assets. L'utilisation d'Expo Router permet de gérer la navigation de façon déclarative, similaire à Next.js pour le web.</p>

<h2>Composants natifs essentiels</h2>
<p>React Native fournit des composants natifs comme <code>View</code>, <code>Text</code>, <code>ScrollView</code>, <code>FlatList</code> et <code>TouchableOpacity</code>. Ces composants se compilent en composants natifs iOS et Android, garantissant des performances optimales.</p>

<h2>Gestion d'état avec Zustand</h2>
<p>Pour la gestion d'état globale, Zustand est une excellente alternative légère à Redux. Il offre une API simple et intuitive, parfaite pour les applications de taille moyenne.</p>

<h2>Intégration Firebase</h2>
<p>Firebase s'intègre parfaitement avec React Native via <code>@react-native-firebase</code>. Il fournit l'authentification, la base de données en temps réel, le stockage de fichiers et les notifications push, couvrant la plupart des besoins backend d'une application mobile.</p>

<h2>Déploiement avec EAS Build</h2>
<p>Expo Application Services (EAS) simplifie la compilation et le déploiement sur l'App Store et le Google Play Store. Une configuration unique dans <code>eas.json</code> suffit pour gérer les builds de développement, preview et production.</p>

<h2>Conclusion</h2>
<p>React Native avec Expo représente aujourd'hui la solution la plus productive pour le développement mobile cross-platform. La réutilisation du code web (React.js), la richesse de l'écosystème npm et la communauté active en font un choix solide pour les projets professionnels.</p>
    `.trim(),
  },
  {
    slug: "laravel-api-rest-bonnes-pratiques",
    title: "API REST avec Laravel : Architecture & Bonnes Pratiques",
    excerpt: "Comment concevoir et développer une API REST robuste, sécurisée et évolutive avec Laravel, incluant l'authentification, la validation et la documentation.",
    date: "2026-05-05",
    readTime: 7,
    tags: ["Laravel", "PHP", "API", "Backend"],
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    content: `
<h2>Laravel comme framework API</h2>
<p>Laravel s'est imposé comme l'un des frameworks PHP les plus populaires pour la création d'APIs REST. Sa syntaxe élégante, ses outils intégrés et sa communauté active en font un choix de premier ordre pour le développement backend.</p>

<h2>Structure des routes API</h2>
<p>Dans Laravel, les routes API sont définies dans <code>routes/api.php</code>. Le versionnement de l'API dès le départ est une bonne pratique :</p>
<pre><code>Route::prefix('v1')->group(function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('products', ProductController::class);
});</code></pre>

<h2>Controllers et Resources</h2>
<p>Les API Resources de Laravel permettent de transformer les modèles Eloquent en JSON de façon cohérente. Elles offrent un contrôle précis sur les données exposées, évitant les fuites d'informations sensibles.</p>

<h2>Authentification avec Sanctum</h2>
<p>Laravel Sanctum est la solution recommandée pour l'authentification d'APIs. Il supporte les tokens d'API et l'authentification par session, couvrant les deux cas d'usage principaux :</p>
<pre><code>php artisan install:api</code></pre>

<h2>Validation des données</h2>
<p>Laravel offre un système de validation puissant via les Form Requests. Centraliser la logique de validation dans des classes dédiées améliore la lisibilité et la maintenabilité du code.</p>

<h2>Gestion des erreurs</h2>
<p>Une API professionnelle doit retourner des réponses d'erreur cohérentes. Le handler d'exceptions de Laravel peut être configuré pour formater automatiquement toutes les erreurs en JSON avec les codes HTTP appropriés.</p>

<h2>Performance avec le cache</h2>
<p>L'utilisation du cache Laravel (Redis ou Memcached) pour les endpoints fréquemment appelés peut réduire le temps de réponse de 90%. Les tags de cache permettent une invalidation précise lors des mutations de données.</p>

<h2>Documentation avec Scribe</h2>
<p>La documentation automatique de l'API avec Scribe ou L5-Swagger facilite l'intégration par les développeurs front-end et les équipes tierces. Une API bien documentée réduit considérablement le temps de support.</p>

<h2>Conclusion</h2>
<p>Laravel offre un écosystème complet pour le développement d'APIs REST professionnelles. En appliquant ces bonnes pratiques dès le départ, vous construisez une base solide, maintenable et évolutive pour vos projets.</p>
    `.trim(),
  },
  {
    slug: "nextjs-seo-app-router-2026",
    title: "SEO avec Next.js App Router en 2026 : Guide Complet",
    excerpt: "Maîtrisez le SEO technique avec Next.js App Router : Metadata API, données structurées, Core Web Vitals, sitemap dynamique et optimisation des performances.",
    date: "2026-04-28",
    readTime: 8,
    tags: ["Next.js", "SEO", "Performance", "React"],
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    content: `
<h2>Next.js App Router et le SEO</h2>
<p>Next.js 13+ avec l'App Router a révolutionné la façon d'aborder le SEO en React. Le rendu côté serveur (SSR) et la génération statique (SSG) garantissent que le contenu est indexable par les moteurs de recherche dès le premier rendu.</p>

<h2>Metadata API</h2>
<p>L'API Metadata de Next.js permet de définir toutes les balises meta de façon typée et structurée :</p>
<pre><code>export const metadata: Metadata = {
  title: "Titre de la page",
  description: "Description optimisée",
  openGraph: {
    title: "Titre OG",
    images: ["/og-image.jpg"],
  },
};</code></pre>

<h2>Données structurées JSON-LD</h2>
<p>Les données structurées permettent aux moteurs de recherche de comprendre le contexte de votre contenu. Les schémas Schema.org comme <code>Person</code>, <code>ProfessionalService</code> et <code>Review</code> sont particulièrement pertinents pour un portfolio freelance.</p>

<h2>EEAT : Expertise, Authoritativeness, Trustworthiness</h2>
<p>Google évalue la qualité du contenu selon le framework EEAT. Pour un portfolio, cela signifie : afficher des témoignages clients réels, lier ses profils sociaux professionnels (LinkedIn, GitHub), et présenter des réalisations vérifiables avec des démos en ligne.</p>

<h2>Core Web Vitals</h2>
<p>Les Core Web Vitals (LCP, FID/INP, CLS) sont des facteurs de classement directs. Next.js optimise automatiquement les images avec <code>next/image</code>, le font avec <code>next/font</code> et supporte le lazy loading natif pour améliorer ces métriques.</p>

<h2>Sitemap dynamique</h2>
<p>Next.js App Router permet de générer des sitemaps dynamiques via <code>app/sitemap.ts</code>. Pour un blog, incluez toutes les URLs des articles avec leur date de modification pour faciliter l'indexation.</p>

<h2>Internationalisation (i18n)</h2>
<p>Le support multilingue améliore la visibilité sur différents marchés. Les balises <code>hreflang</code> dans les métadonnées indiquent aux moteurs de recherche quelle version de la page servir selon la langue de l'utilisateur.</p>

<h2>Conclusion</h2>
<p>Next.js App Router offre tous les outils nécessaires pour une stratégie SEO technique solide. La combinaison du rendu serveur, de la Metadata API et des données structurées positionne favorablement votre site dans les résultats de recherche.</p>
    `.trim(),
  },
  {
    slug: "react-vs-nextjs-2026",
    title: "React vs Next.js : Lequel choisir pour votre projet en 2026 ?",
    excerpt: "Analyse comparative entre React et Next.js pour vous aider à choisir le bon outil selon la nature de votre projet : SPA, site vitrine, e-commerce ou application web.",
    date: "2026-04-15",
    readTime: 5,
    tags: ["React", "Next.js", "JavaScript", "Architecture"],
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    content: `
<h2>React : La bibliothèque UI de référence</h2>
<p>React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Il ne fournit pas de routing, de gestion d'état ni de configuration de build — c'est une brique de base sur laquelle on construit une application.</p>

<h2>Next.js : Le framework full-stack React</h2>
<p>Next.js est un framework complet basé sur React. Il ajoute le routing basé sur les fichiers, le rendu côté serveur (SSR), la génération statique (SSG), les API routes, l'optimisation automatique des images et bien plus encore.</p>

<h2>Quand choisir React seul ?</h2>
<p>React pur (via Vite) est adapté pour : les applications web avec authentification (dashboard, SaaS), les outils internes d'entreprise, et les projets où le SEO n'est pas une priorité. Le bundle final est généralement plus léger et le déploiement plus simple.</p>

<h2>Quand choisir Next.js ?</h2>
<p>Next.js s'impose pour : les sites vitrine et portfolios (SEO critique), les blogs et sites de contenu, les e-commerces, et toute application nécessitant un bon référencement naturel. Le SSR garantit que les moteurs de recherche indexent le contenu correctement.</p>

<h2>Performance</h2>
<p>Next.js optimise automatiquement les performances avec le code splitting, la précompilation des pages statiques et l'optimisation des images. Ces optimisations nécessitent une configuration manuelle avec React seul.</p>

<h2>Déploiement</h2>
<p>React (Vite) se déploie comme un simple site statique sur n'importe quel hébergeur. Next.js tire pleinement parti de Vercel, mais fonctionne aussi sur des serveurs Node.js, en Docker, ou en mode statique selon la configuration.</p>

<h2>Mon choix en 2026</h2>
<p>Pour la plupart des projets clients — sites vitrine, portfolios, e-commerces — je recommande Next.js d'emblée. Le SEO, les performances et l'expérience développeur justifient la légère complexité supplémentaire. React pur reste mon choix pour les applications web internes sans enjeu SEO.</p>
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
