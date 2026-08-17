import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/creation-site-web-casablanca", "Création Site Web Casablanca | Développeur Web", "Création de sites web professionnels à Casablanca : site vitrine, e-commerce et solutions sur mesure. Découvrez des projets réels et demandez votre devis.");
export default function Page() { return <ServicePage data={services["creation-site-web-casablanca"]} />; }

