import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Contact from "../sections/Contact";
import { pageMetadata } from "../lib/site";

export const metadata: Metadata = pageMetadata("/contact", "Contact Développeur Web Freelance | Demander un Devis", "Présentez votre projet de site ou d’application à Soufiane Boutatss. Devis personnalisé et collaboration remote en France, au Canada et à l’international.");

export default function ContactPage() {
  return <><SiteHeader /><main className="bg-black pt-6"><Contact asPage /></main><SiteFooter /></>;
}
