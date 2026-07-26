import type { Metadata } from "next";
import ServicePage from "../components/ServicePage";
import { services } from "../lib/services";
import { absoluteUrl } from "../lib/site";
export const metadata: Metadata = { title: "Référencement Naturel SEO Casablanca | Audit & Technique", description: "SEO technique et local à Casablanca : audit, indexation, contenus, maillage, données structurées et Core Web Vitals, sans promesse artificielle.", alternates: { canonical: absoluteUrl("/referencement-seo-casablanca") } };
export default function Page() { return <ServicePage data={services["referencement-seo-casablanca"]} />; }
