import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { absoluteUrl } from "../lib/site";
export const metadata: Metadata = { title: "Création Site Web Casablanca | Développeur Web Freelance", description: "Développeur web freelance à Casablanca : sites vitrines, e-commerce, applications web et mobile. Découvrez mes réalisations et demandez un devis.", alternates: { canonical: absoluteUrl("/creation-site-web-casablanca") } };
export default function Page() { return <ServicePage data={services["creation-site-web-casablanca"]} />; }

