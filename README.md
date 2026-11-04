# Portfolio de Soufiane Boutatss

Site professionnel de Soufiane Boutatss, développeur web freelance basé au Maroc, disponible à distance pour les clients francophones.

**[Visiter le portfolio officiel de Soufiane Boutatss](https://www.soufianeboutatss.sbs/fr)**

Le site présente les services de développement web et mobile, les réalisations et les moyens de contact.

## Statistiques des visiteurs

L’espace `/admin`, protégé par `ADMIN_PASSWORD`, affiche les 100 dernières sessions de la période choisie : ville et pays estimés, région/code postal disponibles, arrivée, dernier passage, pages consultées et durée cumulée. Un identifiant de session correspond à un onglet, pas à une personne identifiée. Le quartier exact n’est pas déduit d’une adresse IP.

Le suivi utilise `DATABASE_URL` (Neon). Les tables et colonnes manquantes sont ajoutées automatiquement, en conservant les anciennes visites. Le temps des nouvelles visites est mesuré uniquement quand l’onglet est visible, envoyé toutes les 15 secondes et lors du départ. Les retours sur une page s’additionnent ; les envois identiques ou retardés ne doublent pas les durées. Les pages sont regroupées par chemin et par session. Les robots reconnus sont exclus des chiffres.

Vérification du suivi : `node --test tools/analytics.test.mjs`. Vérification de l’application : `npm run build`.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
