import { homeLanguages } from "../lib/seo";
import { PortfolioHome } from "../page";
import { pageMetadata } from "../lib/site";
import { pageCopy } from "../i18n/page-copy";
const base = pageMetadata("/fr", pageCopy.fr.title, pageCopy.fr.description, homeLanguages);
export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "fr_FR" } };
export default function Page() { return <PortfolioHome locale="fr" />; }
