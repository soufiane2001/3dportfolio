import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { pageMetadata } from "../lib/site";
export const metadata: Metadata = pageMetadata("/application-mobile-casablanca", "Développement Application Mobile Casablanca", "Développement d’applications mobiles Android et iOS à Casablanca avec React Native, Expo et un backend adapté. Présentez votre idée pour obtenir une estimation.");
export default function Page() { return <ServicePage data={services["application-mobile-casablanca"]} />; }

