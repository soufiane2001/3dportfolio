import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { absoluteUrl } from "../lib/site";
export const metadata: Metadata = { title: "Création Site Vitrine Casablanca | Site Professionnel", description: "Création de site vitrine à Casablanca pour entreprises, indépendants et PME : design responsive, contact, WhatsApp et SEO technique.", alternates: { canonical: absoluteUrl("/site-vitrine-casablanca") } };
export default function Page() { return <ServicePage data={services["site-vitrine-casablanca"]} />; }

