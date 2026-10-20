# Améliorations SEO du 20 octobre 2026

## Objectif

Objectif demandé : atteindre au moins 10 clics organiques Google par jour.
Il s’agit d’un objectif de suivi, pas d’un résultat garanti par ces changements.
Le code ne contrôle ni la demande, ni le classement, ni les décisions d’indexation.

Les données Search Console et les captures de suivi restent privées et ne sont
pas reproduites dans ce dépôt. Le suivi des résultats doit être effectué par le
propriétaire du site après publication.

## Modifications effectuées

- Pré-rendu des pages publiques : les appels à `headers()` dans le layout et
  l’en-tête rendaient toutes les pages dynamiques. Trois layouts racines avec
  langue explicite conservent le HTML français, anglais et arabe dès la réponse
  initiale, avec RTL pour l’arabe. Les entrées françaises passent dans `(fr)` ;
  les adresses publiques restent identiques. Les services anglais disposent de
  leur route sous `/en`. L’administration et les API restent dynamiques.
- Suppression du proxy devenu inutile ; les redirections permanentes existantes
  restent dans `next.config.ts` et sont testées. Une page 404 globale est ajoutée
  pour les layouts multiples, avec l’option Next.js `globalNotFound` (expérimentale
  dans la version installée). Les routes inconnues renvoient 404 et noindex.
- Page `/services` : onze prestations réparties selon le besoin, liens directs,
  aide au choix et préparation d’une demande de devis. Elle est liée depuis
  l’accueil, la navigation et le pied de page, et ajoutée au sitemap.
- Accueil : guides de préparation de projet et liens choisis pour le public
  francophone, avec accès aux prestations générales et aux pages France/Canada.
  Les pages Casablanca existantes sont conservées et restent accessibles.
- Blog : catégories lisibles, navigation par thème, titres et descriptions du
  hub adaptés aux guides et tutoriels effectivement proposés.
- Articles : sommaire serveur avec ancres, possibilité de titre SEO distinct du
  H1, et métadonnées propres. Les dates modifiées sont limitées aux articles
  réellement retravaillés.
- Trois guides enrichis : collaboration avec un freelance à distance, choix
  vitrine/catalogue/e-commerce et lecture d’un devis de site web au Maroc.
  Ajout de critères de comparaison, tableaux, parcours et références à des
  réalisations du portfolio. Aucun tarif, avis ou résultat commercial inventé.
- Nouveau guide `/blog/cahier-des-charges-site-web` avec modèle à compléter,
  questions de cadrage, critères de réception et précautions pour une refonte.
- Maillage éditorial : les liens sélectionnés explicitement pour une page
  prennent le pas sur les suggestions par mots communs, qui favorisaient parfois
  des destinations moins pertinentes. Liens contextuels entre guides, services,
  projets et contact.

## Vérifications

```bash
npm ci
npm run lint
npm run build
node tools/verify-public-routes.mjs
```

Le vérificateur lance le serveur de production local et contrôle :

- les 89 pages du sitemap, les liens, les ancres, les canoniques et le hreflang ;
- l’absence de page orpheline, de titre ou de description manquante/dupliquée ;
- le pré-rendu de toutes les pages publiques du sitemap ;
- les langues HTML et les directions FR/EN/AR ;
- les erreurs 404, les redirections permanentes et l’administration noindex.

La vérification visuelle dans un navigateur local n’a pas pu être exécutée :
aucun navigateur n’était installé et son téléchargement a échoué. Le responsive
reste donc à contrôler visuellement sur le site publié.

Le pré-rendu est un changement vérifié du mode de rendu, pas une mesure de gain
Core Web Vitals. Les données de terrain et le suivi Search Console restent à
consulter après publication. Les changements de langue entre layouts racines
provoquent un chargement complet, conformément au fonctionnement de Next.js.

## Suivi de l’objectif

Mesurer les clics Google sur une moyenne glissante de 7 puis 28 jours :
70 clics sur 7 jours ou 280 sur 28 jours correspondent à 10 par jour en moyenne,
sans garantir 10 chaque jour. Comparer des périodes complètes et de même durée.
Séparer les recherches de marque des recherches de prestations et distinguer
les pays, appareils, pages et requêtes.

À titre de calcul, 10 clics/jour à 3 % de CTR nécessiteraient environ
333 impressions/jour. Ce n’est pas une prévision de CTR ou de trafic. La progression peut nécessiter
une hausse de visibilité, en complément de l’amélioration des titres.

Après déploiement : vérifier le sitemap existant et les nouvelles pages dans
Search Console ; inspecter les pages prioritaires si nécessaire. Examiner après
14 puis 28 jours les requêtes de chaque page avant une nouvelle réécriture.
Prioriser les requêtes pertinentes ayant déjà des impressions et une position
proche de la première page. Ne pas multiplier les variantes géographiques sans
besoin distinct ni contenu utile.

En complément du code : développer des études de cas avec captures et détails
validés, obtenir des références et des liens éditoriaux de clients/partenaires
réels, et mesurer les demandes effectivement reçues. Aucun message externe,
achat de lien ni campagne automatique n’a été réalisé dans cette intervention.

## Références techniques

- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://nextjs.org/docs/app/api-reference/file-conventions/layout
- https://nextjs.org/docs/app/api-reference/file-conventions/not-found
