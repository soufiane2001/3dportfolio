import BrandMark from "./BrandMark";
import TechnologyRibbon from "./TechnologyRibbon";
import LanguageLinks from "./LanguageLinks";
import Link from "next/link";
import { marketLinks, serviceLinks } from "../lib/site";

export default function SiteHeader() {
  const links = [{ href: "/portfolio", label: "Portfolio" }, { href: "/services", label: "Services" }, { href: "/blog", label: "Blog" }, { href: "/a-propos", label: "À propos" }];
  return <><TechnologyRibbon /><header className="okc-site-header sticky top-0 z-50">
    <div className="container mix-site-header-inner"><Link href="/fr" aria-label="Soufiane Boutatss — Accueil"><BrandMark /></Link>
      <nav className="mix-page-nav" aria-label="Navigation principale">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<details className="okc-dropdown"><summary>Zones</summary><div className="okc-dropdown-panel">{marketLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div></details></nav>
      <div className="okc-header-actions"><LanguageLinks locale="fr" /><Link href="/contact" className="okc-circle-link">Demander un devis</Link><details className="mix-page-mobile-menu"><summary>Menu</summary><nav aria-label="Navigation mobile">{[...links, ...serviceLinks, ...marketLinks, { href: "/contact", label: "Contact" }].map(link => <Link key={`${link.href}-${link.label}`} href={link.href}>{link.label}</Link>)}</nav></details></div>
    </div>
  </header></>;
}
