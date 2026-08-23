import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Analytics from "./components/Analytics";
import { OG_IMAGE, SITE_URL } from "./lib/site";

const GOOGLE_ADS_ID = "AW-17614508548";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Développeur Web Freelance | France, Canada & International", template: "%s | Soufiane Boutatss" },
  description: "Développeur web freelance pour sites et applications React, Next.js, PHP et Laravel. Collaboration remote en France, au Canada et à l’international.",
  applicationName: "Soufiane Boutatss — Développeur Web Freelance",
  authors: [{ name: "Soufiane Boutatss", url: SITE_URL }],
  creator: "Soufiane Boutatss",
  publisher: "Soufiane Boutatss",
  category: "technology",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website", locale: "fr_FR", url: SITE_URL, siteName: "Soufiane Boutatss",
    title: "Développeur Web Freelance | France, Canada & International",
    description: "Sites, applications et solutions web sur mesure pour entreprises en Europe, au Canada et à l’international.",
    images: [{ url: OG_IMAGE, width: 1730, height: 902, alt: "Développement web freelance par Soufiane Boutatss" }],
  },
  twitter: {
    card: "summary_large_image", title: "Développeur Web Freelance | International",
    description: "Développement web sur mesure en React, Next.js, PHP et Laravel, disponible à distance.", images: [OG_IMAGE],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

const jsonLd = [
  {
    "@context": "https://schema.org", "@type": "Person", "@id": `${SITE_URL}/#person`,
    name: "Soufiane Boutatss", url: SITE_URL, image: `${SITE_URL}${OG_IMAGE}`,
    jobTitle: "Développeur Web & Mobile / Full Stack",
    description: "Développeur web freelance proposant des services à distance en France, au Canada, en Europe et à l’international.",
    knowsAbout: ["Web Development", "React", "Next.js", "Laravel", "PHP", "MySQL", "React Native", "Technical SEO"],
    sameAs: ["https://github.com/soufiane2001", "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/", "https://web.facebook.com/soufianski2001"],
  },
  {
    "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${SITE_URL}/#professional-service`,
    name: "Soufiane Boutatss — Développement Web & Mobile", url: SITE_URL,
    description: "Création de sites web, boutiques e-commerce, applications web et mobiles.",
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: [{ "@type": "Country", name: "France" }, { "@type": "Country", name: "Canada" }, { "@type": "Country", name: "Belgique" }, { "@type": "Country", name: "Suisse" }, { "@type": "Country", name: "Maroc" }],
    serviceType: ["Création de site web", "Site vitrine", "Site e-commerce", "Application web", "Application mobile", "SEO technique"],
  },
  {
    "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}/#website`,
    url: SITE_URL, name: "Soufiane Boutatss", inLanguage: ["fr", "en"], publisher: { "@id": `${SITE_URL}/#person` },
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#ff6b00" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
        <Script id="google-ads-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}</Script>
      </body>
    </html>
  );
}
