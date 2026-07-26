# Audit SEO initial — synthèse

## Technologie et rendu

- Next.js 16 App Router, React 19 et TypeScript.
- Homepage et blog générés statiquement ; administration et APIs dynamiques.
- La majorité des sections de la homepage sont des Client Components, mais Next.js fournit leur premier HTML.
- Les nouvelles landing pages sont des Server Components statiques.

## Problèmes initiaux prioritaires

- Domaine `.com` utilisé dans canonical, sitemap, robots et JSON-LD alors que le domaine public demandé est `.sbs`.
- Homepage positionnée principalement comme portfolio/recrutement, avec le nom comme H1.
- Absence de landing pages transactionnelles par service.
- Projets uniquement présentés dans un carousel JavaScript, sans études de cas indexables.
- Absence de pages dédiées À propos et Contact.
- Données structurées contenant des avis et une note agrégée qui ne devaient pas être publiés sans validation indépendante.
- Loader artificiel de quatre secondes et deux scènes Three.js ; corrigés avant cet audit SEO.
- Scripts externes de diagnostic et import Google Fonts bloquant ; corrigés avant cet audit SEO.
- Formulaire sans association explicite entre labels et champs.
- Pas de vraie page 404 personnalisée.

## Analyse SERP

Les résultats observés pour les requêtes Casablanca sont principalement des pages commerciales d’agences ou de freelances. Les structures récurrentes sont : proposition de valeur immédiate, services, portfolio, processus, tarifs ou devis, FAQ, preuves et contact WhatsApp. L’opportunité du site est de combiner ces éléments avec une identité personnelle, des technologies et des réalisations vérifiables, sans pages locales génériques ni promesses artificielles.

