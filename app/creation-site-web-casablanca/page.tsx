import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/creation-site-web-casablanca", "Création Site Web Casablanca | Soufiane Boutatss", "Création de sites internet professionnels à Casablanca pour entreprises, PME et indépendants : responsive, rapides et prêts pour le SEO. Demandez un devis.");
export default function Page() { return <ServicePage data={services["creation-site-web-casablanca"]} />; }

