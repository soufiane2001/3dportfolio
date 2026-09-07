import { homeLanguages } from "../lib/seo";
import { PortfolioHome } from "../page";
import { pageMetadata } from "../lib/site";
import { pageCopy } from "../i18n/page-copy";
const base = pageMetadata("/en", pageCopy.en.title, pageCopy.en.description, homeLanguages);
export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "en_GB" } };
export default function Page() { return <PortfolioHome locale="en" />; }
