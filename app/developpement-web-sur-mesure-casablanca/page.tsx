import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/developpement-web-sur-mesure-casablanca", "Développement Web Sur Mesure Casablanca", "Applications web, plateformes métier et logiciels sur mesure à Casablanca avec une architecture Full Stack fiable. Échangeons sur vos processus et priorités.");
export default function Page() { return <ServicePage data={services["developpement-web-sur-mesure-casablanca"]} />; }

