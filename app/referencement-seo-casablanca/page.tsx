import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/referencement-seo-casablanca", "Référencement SEO Casablanca | SEO Maroc", "Audit et référencement naturel à Casablanca : technique, contenus, maillage et SEO local pour gagner en visibilité durablement. Demandez un diagnostic.");
export default function Page() { return <ServicePage data={services["referencement-seo-casablanca"]} />; }
