import BrandMark from "./BrandMark";
import LanguageLinks from "./LanguageLinks";
import Link from "next/link";
import { marketLinks, serviceLinks } from "../lib/site";

export default function SiteHeader() {
  const locale = "fr";
  return <header className="okc-site-header sticky top-0 z-50"><div className="container flex min-h-20 flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3">
    <Link href="/fr" className="text-base sm:text-xl font-medium text-white" aria-label="Soufiane Boutatss — Accueil"><BrandMark /></Link>
    <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigation principale">
      <details className="group relative"><summary className="cursor-pointer list-none text-sm text-white/70 hover:text-white">Services</summary><div className="absolute left-0 top-full mt-4 grid w-[34rem] grid-cols-2 gap-1 border border-white/10 bg-[#292929] p-4 shadow-2xl">{[{href:"/services",label:"Toutes les prestations"}, ...serviceLinks].map(link => <Link key={link.href} href={link.href} className="px-3 py-2.5 text-sm text-white/65 hover:bg-white/5 hover:text-white">{link.label}</Link>)}</div></details>
      <Link href="/portfolio" className="text-sm text-white/70 hover:text-white">Portfolio</Link><Link href="/blog" className="text-sm text-white/70 hover:text-white">Blog</Link>
      <details className="group relative"><summary className="cursor-pointer list-none text-sm text-white/70 hover:text-white">Zones</summary><div className="absolute right-0 top-full mt-4 w-60 border border-white/10 bg-[#292929] p-3 shadow-2xl">{marketLinks.map(link => <Link key={link.href} href={link.href} className="block px-3 py-2.5 text-sm text-white/65 hover:bg-white/5 hover:text-white">{link.label}</Link>)}</div></details>
      <Link href="/a-propos" className="text-sm text-white/70 hover:text-white">À propos</Link><Link href="/contact" className="okc-circle-link">Demander un devis</Link>
    </nav>
    <div className="ms-auto flex shrink-0 items-center xl:ms-0"><LanguageLinks locale={locale} /></div>
    <details className="relative xl:hidden"><summary className="flex min-h-11 cursor-pointer list-none items-center rounded-lg border border-white/15 px-3 text-sm focus-visible:outline-2 focus-visible:outline-[#ed687b]">Menu</summary><nav className="absolute right-0 mt-3 max-h-[70svh] w-[min(20rem,calc(100vw-2.5rem))] overflow-y-auto border border-white/10 bg-[#292929] p-4 shadow-2xl">{[{href:"/services",label:"Toutes les prestations"}, ...serviceLinks, ...marketLinks, {href:"/portfolio",label:"Portfolio"},{href:"/blog",label:"Blog"},{href:"/a-propos",label:"À propos"},{href:"/contact",label:"Contact"}].map(link => <Link key={`${link.href}-${link.label}`} href={link.href} className="block px-3 py-3 text-base text-white/75 hover:bg-white/5">{link.label}</Link>)}</nav></details>
  </div></header>;
}
