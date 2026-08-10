import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/creation-site-ecommerce-casablanca", "Création Site E-commerce Casablanca | Boutique en Ligne", "Création de boutique en ligne à Casablanca : catalogue, commandes, administration et parcours mobile fluide. Lancez un e-commerce adapté au marché marocain.");
export default function Page() { return <ServicePage data={services["creation-site-ecommerce-casablanca"]} />; }

