import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/developpement-web-sur-mesure-casablanca", "Développement Application Web Sur Mesure Maroc | Casablanca", "Développement d’application web sur mesure au Maroc : plateformes métier, logiciels, dashboards et API à Casablanca. Étudions vos processus et priorités.");
export default function Page() { return <ServicePage data={services["developpement-web-sur-mesure-casablanca"]} />; }

