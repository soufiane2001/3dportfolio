import { homeLanguages } from "../lib/seo";
import { PortfolioHome } from "../page";
import { pageMetadata } from "../lib/site";
import { pageCopy } from "../i18n/page-copy";
const base = pageMetadata("/ar", pageCopy.ar.title, pageCopy.ar.description, homeLanguages);
export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "ar_MA" } };
export default function Page() { return <PortfolioHome locale="ar" />; }
