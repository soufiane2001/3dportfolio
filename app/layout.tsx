import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Analytics from "./components/Analytics";

const BASE_URL = "https://soufianeboutatssdev.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Soufiane Boutatss | Développeur Web & Mobile React Laravel Next.js",
    template: "%s | Soufiane Boutatss",
  },
  description:
    "Soufiane Boutatss, développeur web et mobile freelance au Maroc. Spécialiste React.js, React Native, Laravel, Next.js. Plus de 5 ans d'expérience, 30+ projets livrés. Disponible pour vos projets web et mobile.",
  keywords: [
    "Soufiane Boutatss",
    // Maroc
    "développeur web Maroc",
    "développeur freelance Maroc",
    "développeur React Maroc",
    "développeur mobile Maroc",
    "web developer Morocco",
    "freelance developer Morocco",
    // France
    "développeur web France",
    "développeur freelance France",
    "développeur React France",
    "développeur Next.js France",
    "développeur mobile France",
    // USA
    "web developer USA",
    "freelance React developer USA",
    "mobile app developer United States",
    "React Native developer US",
    // Global
    "React developer",
    "React Native developer",
    "Laravel developer",
    "Next.js developer",
    "full stack developer",
    "JavaScript developer",
    "TypeScript developer",
    "PHP developer",
    "application mobile React Native",
    "portfolio développeur",
    "soufiane boutatss dev",
    "sboutatss",
  ],
  applicationName: "Soufiane Boutatss Portfolio",
  authors: [{ name: "Soufiane Boutatss", url: BASE_URL }],
  creator: "Soufiane Boutatss",
  publisher: "Soufiane Boutatss",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["en_US", "fr_FR", "ar_MA"],
    url: BASE_URL,
    siteName: "Soufiane Boutatss — Portfolio",
    title: "Soufiane Boutatss | Développeur Web & Mobile",
    description:
      "Développeur web et mobile freelance au Maroc — React.js, React Native, Laravel, Next.js. 5+ ans d'expérience, 34+ clients satisfaits.",
    images: [
      {
        url: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png",
        width: 1200,
        height: 630,
        alt: "Soufiane Boutatss - Développeur Web & Mobile",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soufiane Boutatss | Développeur Web & Mobile",
    description:
      "Développeur web et mobile freelance au Maroc — React.js, React Native, Laravel, Next.js.",
    images: [
      "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png",
    ],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "fr-MA": BASE_URL,
      "fr-FR": BASE_URL,
      "en-US": BASE_URL,
      "ar-MA": BASE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Soufiane Boutatss",
      givenName: "Soufiane",
      familyName: "Boutatss",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png",
        width: 400,
        height: 400,
      },
      jobTitle: "Développeur Web & Mobile Freelance",
      description:
        "Développeur web et mobile freelance spécialisé en React.js, React Native, Laravel et Next.js avec plus de 6 ans d'expérience et 34+ clients satisfaits.",
      nationality: "Moroccan",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MA",
        addressLocality: "Maroc",
      },
      knowsAbout: [
        "React.js",
        "React Native",
        "Laravel",
        "Next.js",
        "TypeScript",
        "PHP",
        "MySQL",
        "Firebase",
        "Tailwind CSS",
        "JavaScript",
        "Node.js",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Développeur Web & Mobile",
        occupationLocation: {
          "@type": "Country",
          name: "Morocco",
        },
        skills: "React.js, React Native, Laravel, Next.js, TypeScript, PHP, MySQL",
      },
      sameAs: [
        "https://github.com/soufiane2001",
        "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/",
        "https://web.facebook.com/soufianski2001",
      ],
      email: "sboutatss@gmail.com",
      telephone: "+212689213015",
      workExample: [
        { "@type": "WebSite", name: "Reby Art Portfolio", url: "https://rebyart.vercel.app/" },
        { "@type": "WebSite", name: "HighUp Counselling", url: "https://www.highupcounselling.ca/" },
        { "@type": "WebSite", name: "Horea Formation", url: "https://www.horea-formation.com/" },
        { "@type": "WebSite", name: "Dar Mooris", url: "https://darmooris.ma/" },
        { "@type": "WebSite", name: "Gamlastan Shop", url: "https://gamlastanshop.space/" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Soufiane Boutatss Portfolio",
      description: "Portfolio de Soufiane Boutatss, développeur web et mobile freelance au Maroc",
      publisher: { "@id": `${BASE_URL}/#person` },
      inLanguage: ["fr-MA", "en-US", "ar"],
      dateModified: new Date().toISOString().split("T")[0],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Soufiane Boutatss — Développement Web & Mobile",
      url: BASE_URL,
      description:
        "Services de développement web et mobile freelance: sites web, applications mobiles, e-commerce, dashboards.",
      provider: { "@id": `${BASE_URL}/#person` },
      areaServed: ["MA", "FR", "US", "CA", "BE"],
      serviceType: [
        "Développement Web",
        "Développement Mobile",
        "Application React Native",
        "Site Web Laravel",
        "E-commerce",
        "Dashboard",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "4",
        reviewCount: "4",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Karim Washington" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "I had the pleasure of working with Soufiane on my website project, and I couldn't be more satisfied with the results. His professionalism, creativity, and technical expertise are outstanding!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Hind El hassouni" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Soufiane did an amazing job building our software. He understood our needs perfectly, delivered on time, and the final product works flawlessly. Highly recommended!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Michel Reby" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Working with Soufiane on the Reby Art website has been a fantastic experience! He took our artistic vision and brought it to life with stunning design and functionality.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Karime Rahmani" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Working with Soufiane to build our website High Up Counselling was an exceptional experience from start to finish. He quickly understood our vision and translated it into a clean, professional, and user-friendly website.",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de développement",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Développement Web React / Next.js" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Application Mobile React Native" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Backend Laravel / PHP" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Site E-commerce" } },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Soufiane Boutatss | Développeur Web & Mobile React Laravel Next.js",
      description:
        "Portfolio de Soufiane Boutatss, développeur web et mobile freelance au Maroc. React.js, React Native, Laravel, Next.js.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#person` },
      inLanguage: ["fr-MA", "en-US", "ar"],
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png",
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "À propos", item: `${BASE_URL}/#about` },
        { "@type": "ListItem", position: 3, name: "Compétences", item: `${BASE_URL}/#skills` },
        { "@type": "ListItem", position: 4, name: "Projets", item: `${BASE_URL}/#portfolio` },
        { "@type": "ListItem", position: 5, name: "Expérience", item: `${BASE_URL}/#experiences` },
        { "@type": "ListItem", position: 6, name: "Contact", item: `${BASE_URL}/#contact` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#ff6b00" />
        <meta name="msapplication-TileColor" content="#ff6b00" />
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Maroc" />
        <meta name="geo.position" content="31.7917;-7.0926" />
        <meta name="ICBM" content="31.7917, -7.0926" />
        <meta name="rating" content="general" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Intégration correcte de Google Analytics avec next/script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17614508548`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17614508548');
            `,
          }}
        />

        {/* Autres scripts */}
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="25fe0452-9320-4752-80dd-44fdc2737b22"
        />
        <Script
          id="route-messenger"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
