import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/site-vitrine-casablanca", "Création Site Vitrine Casablanca | Site Professionnel", "Site vitrine professionnel à Casablanca pour présenter votre activité, rassurer vos clients et générer des contacts. Obtenez une estimation personnalisée.");
export default function Page() { return <ServicePage data={services["site-vitrine-casablanca"]} />; }

