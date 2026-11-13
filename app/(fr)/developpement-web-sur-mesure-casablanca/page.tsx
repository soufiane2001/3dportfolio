import type { Metadata } from "next";
import ServicePage from "../../components/ServicePage";
import { services } from "../../lib/services";
import { pageMetadata } from "../../lib/site";

const service = services["developpement-web-sur-mesure-casablanca"];

export const metadata: Metadata = pageMetadata(
  `/${service.slug}`,
  service.title,
  "Développement de logiciels métier et d’applications web à Casablanca. Cadrage, reprise de données, intégrations et déploiement pour les entreprises au Maroc."
);

export default function Page() {
  return <ServicePage data={service} />;
}

