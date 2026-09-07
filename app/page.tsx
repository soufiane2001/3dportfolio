import { permanentRedirect } from "next/navigation";
import RelatedContent from "./components/RelatedContent";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import { LanguageProvider } from "./i18n/LanguageContext";
import LocalServices from "./components/LocalServices";
import SiteFooter from "./components/SiteFooter";
import { absoluteUrl, pageMetadata } from "./lib/site";

const baseMetadata: Metadata = pageMetadata(
  "/",
  "Développeur Web Freelance | Sites & Applications Sur Mesure",
  "Développeur web freelance au Maroc : création de sites et développement d’applications web sur mesure pour la France, le Canada et l’international."
);

export const metadata: Metadata = { ...baseMetadata, alternates: { canonical: absoluteUrl("/fr"), languages: { fr: absoluteUrl("/fr"), en: absoluteUrl("/en"), ar: absoluteUrl("/ar"), "x-default": absoluteUrl("/") } } };

const About = dynamic(() => import("./sections/About"));
const Services = dynamic(() => import("./sections/Services"));
const Skills = dynamic(() => import("./sections/Skills"));
const Projects = dynamic(() => import("./sections/Projects"));
const Experience = dynamic(() => import("./sections/Experience"));
const Testimonials = dynamic(() => import("./sections/Testimonials"));
const Hobbies = dynamic(() => import("./sections/Hobbies"));
const Contact = dynamic(() => import("./sections/Contact"));

export function PortfolioHome({ locale = "fr" }: { locale?: import("./i18n/translations").Locale }) {
  return (
    <LanguageProvider locale={locale}>
      <div className="flex min-h-screen flex-col bg-black">
        <Header />
        <Hero />
        <LocalServices locale={locale} />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Hobbies />
        <RelatedContent path={`/${locale}`} subject="freelance react php maroc france canada" locale={locale} />
        <Contact />
        <SiteFooter locale={locale} />
      </div>
    </LanguageProvider>
  );
}

export default function Home() { permanentRedirect("/fr"); }
