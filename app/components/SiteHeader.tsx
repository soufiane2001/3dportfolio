import LanguageLinks from "./LanguageLinks";
import { headers } from "next/headers";
import Link from "next/link";
import { marketLinks, serviceLinks } from "../lib/site";

export default async function SiteHeader() {
  const language = (await headers()).get("x-site-locale");
  const locale = language === "en" || language === "ar" ? language : "fr";
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-black/92 backdrop-blur-xl"><div className="container flex min-h-20 items-center justify-between gap-2 py-3">
    <Link href="/fr" className="text-base sm:text-xl font-black text-white" aria-label="Soufiane Boutatss — Accueil">Soufiane<span className="text-[#ff6b00]">.</span></Link>
    <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigation principale">
      <details className="group relative"><summary className="cursor-pointer list-none text-sm text-white/70 hover:text-white">Services</summary><div className="absolute left-0 top-full mt-4 grid w-[34rem] grid-cols-2 gap-1 border border-white/10 bg-[#080808] p-4 shadow-2xl">{serviceLinks.map(link => <Link key={link.href} href={link.href} className="px-3 py-2.5 text-sm text-white/65 hover:bg-white/5 hover:text-white">{link.label}</Link>)}</div></details>
      <Link href="/portfolio" className="text-sm text-white/70 hover:text-white">Portfolio</Link><Link href="/blog" className="text-sm text-white/70 hover:text-white">Blog</Link>
      <details className="group relative"><summary className="cursor-pointer list-none text-sm text-white/70 hover:text-white">Zones</summary><div className="absolute right-0 top-full mt-4 w-60 border border-white/10 bg-[#080808] p-3 shadow-2xl">{marketLinks.map(link => <Link key={link.href} href={link.href} className="block px-3 py-2.5 text-sm text-white/65 hover:bg-white/5 hover:text-white">{link.label}</Link>)}</div></details>
      <Link href="/a-propos" className="text-sm text-white/70 hover:text-white">À propos</Link><Link href="/contact" className="rounded-full bg-[#ff6b00] px-5 py-2.5 text-sm font-bold">Demander un devis</Link>
    </nav>
    <LanguageLinks locale={locale} />
    <details className="relative xl:hidden"><summary className="cursor-pointer list-none rounded-lg border border-white/15 px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-[#ff6b00]">Menu</summary><nav className="absolute right-0 mt-3 max-h-[75vh] w-80 overflow-y-auto border border-white/10 bg-[#080808] p-4 shadow-2xl">{[...serviceLinks, ...marketLinks, {href:"/portfolio",label:"Portfolio"},{href:"/blog",label:"Blog"},{href:"/a-propos",label:"À propos"},{href:"/contact",label:"Contact"}].map(link => <Link key={`${link.href}-${link.label}`} href={link.href} className="block px-3 py-2.5 text-sm text-white/75 hover:bg-white/5">{link.label}</Link>)}</nav></details>
  </div></header>;
}
