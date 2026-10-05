# SEO : pages renforcées et suivi après publication

L’objectif est d’améliorer la pertinence des pages et leur visibilité sur des
recherches qualifiées. Une place dans le top 10 n’est pas garantie par le code,
le volume de texte ou la soumission du sitemap.

## Une intention principale par destination

| Destination | Besoin du visiteur |
| --- | --- |
| `/casablanca/seo` | Trouver un consultant SEO à Casablanca, comprendre l’audit et demander une intervention |
| `/seo` | Examiner un audit technique, ses contrôles et son périmètre |
| `/blog/seo-site-entreprise-maroc` | Comprendre indexation, impressions, clics et premières priorités |
| `/creation-site-web-casablanca` | Créer ou refondre un site professionnel à Casablanca |
| `/developpement-web-sur-mesure-casablanca` | Demander une application web métier au Maroc |
| `/developpement-web-sur-mesure` | Cadrer un MVP, une plateforme SaaS et les données de l’application |
| `/application-mobile-casablanca` | Demander une application mobile à Casablanca |
| `/portfolio/cash-management-app` | Examiner un projet de gestion de dépenses avec React Native, Expo et Firebase |

Les pages génériques de services expliquent désormais leurs choix techniques,
livrables et questions spécifiques. Les variantes France, Canada, Belgique et
Suisse conservent leurs adresses et ajoutent un contenu adapté à la préparation
du projet. Les versions ne revendiquent pas de bureaux locaux inexistants.

Les liens entre guides, prestations et réalisations sont sélectionnés selon le
besoin du lecteur. Les illustrations du portfolio sont identifiées comme telles.
Les dates de modification ne sont renseignées que pour les contenus réellement
modifiés ; les dates de publication des articles restent conservées.

## Validation

Depuis la racine du dépôt :

```bash
npm ci
npm run lint
npm run build
npm run start -- --hostname 127.0.0.1 --port 3102
```

Dans un second terminal :

```bash
python tools/audit-seo.py http://127.0.0.1:3102
```

Le contrôle parcourt le sitemap et vérifie les codes HTTP, les canonical, les
titres, descriptions, H1, langues, hreflang réciproques, liens, ancres, attributs
alt et JSON-LD. Il signale également les pages sans lien entrant dans le site.
Il ne remplace pas un contrôle visuel ou une mesure de performance mobile.

## Après mise en production

1. Vérifier `/casablanca/seo`, les pages React France/Canada et l’étude de cas
   mobile sur le domaine final. Contrôler aussi les formulaires sur mobile.
2. Inspecter les URLs prioritaires dans Search Console et demander leur
   indexation après vérification. Soumettre le sitemap canonique s’il n’est pas
   déjà enregistré. Une demande n’impose ni indexation ni classement à Google.
3. Filtrer chaque page prioritaire dans le rapport Performance. Comparer les
   mêmes requêtes, pays, appareils et périodes de durée égale. Distinguer les
   recherches de marque des recherches de prestations.
4. Consulter les pages exclues et les canonical retenus par Google. Une baisse
   du nombre de pages retenues peut venir d’une consolidation de doublons ; elle
   doit être analysée par URL.
5. Mesurer les Core Web Vitals sur mobile avec les données disponibles, puis
   vérifier les pages prioritaires avec PageSpeed Insights. Le retrait du délai
   d’apparition du hero doit être évalué sur le site déployé.
6. Enrichir les études de cas avec des captures réelles et des résultats
   vérifiés lorsqu’ils sont disponibles. Les chiffres de performance ou de
   ventes ne doivent pas être déduits de la seule présence d’une réalisation.
7. Suivre les demandes effectivement reçues. Un clic WhatsApp ou un clic sur
   un bouton de formulaire ne constitue pas à lui seul un client acquis.

Pour l’autorité du domaine, poursuivre les contributions utiles et les liens
éditoriaux de clients ou partenaires réels décrits dans
`SEO-AUTHORITY-PLAN.md`. Aucun achat de liens ou campagne automatique n’est prévu.

## Références

- [Google : contenus utiles et fiables](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google : titres dans les résultats](https://developers.google.com/search/docs/appearance/title-link)
- [Google : sites multilingues et multirégionaux](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
