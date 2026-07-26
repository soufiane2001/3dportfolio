import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { absoluteUrl } from "../lib/site";
export const metadata: Metadata = { title: "Création Site E-commerce Casablanca | Boutique en Ligne", description: "Création de boutique en ligne à Casablanca : catalogue, panier, commandes, administration, paiement à la livraison et SEO e-commerce.", alternates: { canonical: absoluteUrl("/creation-site-ecommerce-casablanca") } };
export default function Page() { return <ServicePage data={services["creation-site-ecommerce-casablanca"]} />; }

