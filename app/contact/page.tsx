import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Contact from "../sections/Contact";
import { pageMetadata } from "../lib/site";

export const metadata: Metadata = pageMetadata("/contact", "Contact Développeur Web Casablanca | Soufiane Boutatss", "Contactez Soufiane Boutatss pour discuter d’un site web, e-commerce, application web ou mobile à Casablanca et au Maroc. Demandez une estimation.");

export default function ContactPage() {
  return <><SiteHeader /><main className="bg-black pt-6"><Contact asPage /></main><SiteFooter /></>;
}
