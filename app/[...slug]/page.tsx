import { landingLanguages } from "../lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternationalLandingPage from "../components/InternationalLandingPage";
import { getLandingPage, landingPages } from "../lib/landing-pages";
import { pageMetadata } from "../lib/site";

type Params = { slug: string[] };
export const dynamicParams = false;
export function generateStaticParams() { return landingPages.filter(page => page.path !== "/en").map(page => ({ slug: page.path.split("/").filter(Boolean) })); }
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params; const page = getLandingPage(`/${slug.join("/")}`); if (!page) return {};
  const languages = landingLanguages(page.path);
  return pageMetadata(page.path, page.title, page.description, languages);
}
export default async function Landing({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const page = getLandingPage(`/${slug.join("/")}`); if (!page) notFound();
  return <InternationalLandingPage page={page} />;
}
