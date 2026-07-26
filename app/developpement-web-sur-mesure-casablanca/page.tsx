import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { absoluteUrl } from "../lib/site";
export const metadata: Metadata = { title: "Développement Web Sur Mesure Casablanca | Full Stack", description: "Applications web et plateformes sur mesure à Casablanca avec React, Next.js, Laravel, PHP, MySQL, Firebase et APIs REST.", alternates: { canonical: absoluteUrl("/developpement-web-sur-mesure-casablanca") } };
export default function Page() { return <ServicePage data={services["developpement-web-sur-mesure-casablanca"]} />; }

