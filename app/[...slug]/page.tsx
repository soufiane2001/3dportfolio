import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternationalLandingPage from "../components/InternationalLandingPage";
import { getLandingPage, landingPages } from "../lib/landing-pages";
import { absoluteUrl, pageMetadata } from "../lib/site";

type Params = { slug: string[] };
export const dynamicParams = false;
export function generateStaticParams() { return landingPages.map(page => ({ slug: page.path.split("/").filter(Boolean) })); }
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params; const page = getLandingPage(`/${slug.join("/")}`); if (!page) return {};
  const languages = page.alternates ? Object.fromEntries(Object.entries(page.alternates).map(([key, path]) => [key, absoluteUrl(path)])) : undefined;
  return pageMetadata(page.path, page.title, page.description, languages);
}
export default async function Landing({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const page = getLandingPage(`/${slug.join("/")}`); if (!page) notFound();
  return <InternationalLandingPage page={page} />;
}
