import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { absoluteUrl } from "../lib/site";
export const metadata: Metadata = { title: "Création Application Mobile Casablanca | React Native", description: "Développement d’applications mobiles Android et iOS à Casablanca avec React Native, Expo, Firebase et APIs sur mesure.", alternates: { canonical: absoluteUrl("/application-mobile-casablanca") } };
export default function Page() { return <ServicePage data={services["application-mobile-casablanca"]} />; }

