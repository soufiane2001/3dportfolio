# SEO Strategy — soufianeboutatss.sbs

## Target Markets

1. France (35 % de l’effort) — français, EUR, collaboration remote.
2. Canada / Québec (25 %) — français et besoins bilingues, CAD, remote sans adresse locale.
3. International anglophone (15 %) — anglais séparé sous `/en/`.
4. Belgique (10 %) — français, EUR, remote.
5. Suisse (10 %) — français, CHF lorsque pertinent, remote.
6. Maroc / Casablanca (5 %) — maintien des pages qui commencent à performer.

## Keyword Mapping

| Keyword | Country | Intent | Target URL | Priority |
| ------- | ------- | ------ | ---------- | -------- |
| développeur web freelance France | France | Transactional | /france/developpeur-web-freelance | P1 |
| création site web France | France | Transactional | /france/creation-site-web | P1 |
| développeur React freelance | France / Global | Transactional | /developpeur-react | P1 |
| développeur Next.js freelance | France / Global | Transactional | /developpeur-nextjs | P1 |
| développeur PHP freelance | France / Global | Transactional | /developpeur-php | P1 |
| développeur web freelance Canada | Canada | Transactional | /canada/developpeur-web-freelance | P1 |
| développeur web Québec | Canada | Transactional | /canada/developpeur-web-freelance | P1 |
| création site web Canada | Canada | Transactional | /canada/creation-site-web | P1 |
| développeur web freelance Belgique | Belgique | Transactional | /belgique/developpeur-web-freelance | P2 |
| développeur web freelance Suisse | Suisse | Transactional | /suisse/developpeur-web-freelance | P2 |
| freelance web developer | Global EN | Transactional | /en/freelance-web-developer | P1 |
| remote full stack developer | Global EN | Transactional | /en/full-stack-developer | P2 |
| SEO Casablanca | Morocco | Transactional | /casablanca/seo | P2 |
| développement web Casablanca | Morocco | Transactional | /developpement-web-sur-mesure-casablanca | P2 |
| développeur web freelance France remote | France | Informational | /blog/developpeur-web-freelance-france-remote | P1 |
| React Native Expo | Global | Informational | /blog/react-native-expo-guide-2026 | P2 |

## URL Mapping

- Les services génériques vivent à la racine : `/creation-site-web`, `/developpeur-react`, `/seo`, etc.
- Les pages pays ne sont créées que pour les marchés prioritaires et disposent d’un contexte marché distinct.
- Les articles répondent aux intentions informatives et pointent vers les landing pages transactionnelles.
- L’anglais est strictement séparé sous `/en/`.

## Internal Linking

- Homepage → services globaux → France et Canada.
- Pages France / Canada → technologies, portfolio, contact et article remote.
- Article France remote → `/france/developpeur-web-freelance` avec une ancre commerciale naturelle.
- Articles React / Next.js / PHP → pages technologie correspondantes, puis pages pays prioritaires.
- `/casablanca/seo` → `/creation-site-web`, `/developpement-web-sur-mesure`, `/contact`.
- Études de cas → service global pertinent lors d’une prochaine passe éditoriale.

## Content Clusters

- Freelance web : choisir un freelance, freelance vs agence, budget, contrat et collaboration remote.
- France : prix d’un site, coût React freelance, choix d’un développeur en France.
- Canada : coût d’un site au Québec, bilinguisme, freelance vs agence à Montréal.
- Technique : React Native, Expo, Next.js, React Query, Laravel, PHP, SEO technique, Core Web Vitals.

## Existing URLs to Preserve

- `/blog/developpeur-web-freelance-france-remote`
- `/blog/react-native-expo-guide-2026`
- `/developpement-web-sur-mesure-casablanca`
- `/creation-site-web-casablanca`
- `/site-vitrine-casablanca`
- `/creation-site-ecommerce-casablanca`
- `/application-mobile-casablanca`
- Tous les slugs actuels de blog et de portfolio.

## Redirects

| Source | Destination | Status | Reason |
| --- | --- | --- | --- |
| non-www `/:path*` | `https://www.soufianeboutatss.sbs/:path*` | 301 | Domaine canonique unique |
| `/creation-site-internet-casablanca` | `/creation-site-web-casablanca` | 301 | Ancienne variante conservée |
| `/referencement-seo-casablanca` | `/casablanca/seo` | 301 | Consolider la requête SEO Casablanca |

## Hreflang Mapping

Groupe freelance principal :

- `fr-FR` → `/france/developpeur-web-freelance`
- `fr-CA` → `/canada/developpeur-web-freelance`
- `fr-BE` → `/belgique/developpeur-web-freelance`
- `fr-CH` → `/suisse/developpeur-web-freelance`
- `en` → `/en/freelance-web-developer`
- `x-default` → `/developpeur-web-freelance`

Les autres pages ne reçoivent un hreflang que lorsqu’un équivalent réel existe. Les liens sont absolus et générés aussi dans le sitemap.

## Schema Mapping

- Layout / homepage : `Person`, `ProfessionalService`, `WebSite`.
- Landing pages : `Service`, `BreadcrumbList`, `FAQPage` (FAQ visible).
- Articles : `BlogPosting`, `BreadcrumbList`.
- Portfolio : données structurées d’étude de cas existantes.
- Aucun avis, rating, prix, certification, bureau ou résultat inventé.

## Future Content Ideas

- Combien coûte un site web professionnel en France ?
- Freelance vs agence web : quel choix pour une PME ?
- Coût d’un développeur React freelance en France.
- Prix d’un site web au Canada et au Québec.
- Concevoir un site bilingue français–anglais au Canada.
- Next.js ou WordPress pour un site professionnel ?
- Checklist Core Web Vitals pour un site de services.

## France Strategy

La landing `/france/developpeur-web-freelance` porte l’intention transactionnelle. L’article remote conserve une intention informative et transmet son autorité vers la landing. Les pages technologie et création de site soutiennent le cluster sans cibler le même mot-clé principal.

## Canada Strategy

La page principale précise explicitement le service 100 % remote, l’absence de bureau local, les besoins francophones/bilingues, la devise CAD et la gestion des fuseaux horaires. Le projet HighUp Counselling sert de preuve réelle sans résultat inventé.

## International Strategy

Les pages anglaises sont rédigées en anglais naturel sous `/en/`. Elles ciblent freelance web developer, remote web developer, React, Next.js, PHP et full stack. Aucun mélange linguistique n’est utilisé dans leur contenu principal.

## Casablanca Strategy

Les URL historiques sont conservées. `/casablanca/seo` devient la cible unique de “SEO Casablanca” et redirige l’ancienne URL SEO. Casablanca reste présent dans le footer de marché et le sitemap, sans dominer la homepage ni les services globaux.
