import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";

const BASE_URL = "https://portfoliosoufdev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Soufiane Boutatss | Web & Mobile Developer",
    template: "%s | Soufiane Boutatss",
  },
  description:
    "Soufiane Boutatss is a passionate web and mobile developer with 5+ years of experience specializing in React.js, React Native, Laravel, and Next.js. 30+ projects delivered across web and mobile platforms.",
  keywords: [
    "Soufiane Boutatss",
    "web developer",
    "mobile developer",
    "React developer",
    "React Native developer",
    "Laravel developer",
    "Next.js developer",
    "freelance developer",
    "full stack developer",
    "JavaScript developer",
    "TypeScript developer",
    "Morocco developer",
  ],
  authors: [{ name: "Soufiane Boutatss", url: BASE_URL }],
  creator: "Soufiane Boutatss",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Soufiane Boutatss Portfolio",
    title: "Soufiane Boutatss | Web & Mobile Developer",
    description:
      "Passionate web and mobile developer specializing in React.js, React Native, Laravel, and Next.js. 5+ years of experience, 30+ projects delivered.",
    images: [
      {
        url: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png",
        width: 1200,
        height: 630,
        alt: "Soufiane Boutatss - Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soufiane Boutatss | Web & Mobile Developer",
    description:
      "Passionate web and mobile developer specializing in React.js, React Native, Laravel, and Next.js.",
    images: [
      "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png",
    ],
    creator: "@soufiane",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "https://portfoliosoufdev.vercel.app/static/media/so.c04a87ed30752959fd17.png" },
    ],
    apple: [
      { url: "https://portfoliosoufdev.vercel.app/static/media/so.c04a87ed30752959fd17.png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Soufiane Boutatss",
  url: BASE_URL,
  image: "https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778438634/Gemini_Generated_Image_yfw0szyfw0szyfw0-removebg-preview_lft2su.png",
  jobTitle: "Web & Mobile Developer",
  description:
    "Passionate web and mobile developer specializing in React.js, React Native, Laravel, and Next.js with 5+ years of experience.",
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
  ],
  sameAs: [
    "https://github.com/soufiane2001",
    "https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/",
    "https://web.facebook.com/soufianski2001",
  ],
  email: "sboutatss@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="https://portfoliosoufdev.vercel.app/static/media/so.c04a87ed30752959fd17.png" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="25fe0452-9320-4752-80dd-44fdc2737b22"
        />
        <Script
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
      </body>
    </html>
  );
}
