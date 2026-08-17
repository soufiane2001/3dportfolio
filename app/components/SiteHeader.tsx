import Link from "next/link";
import { serviceLinks } from "../lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-xl font-black text-white" aria-label="Soufiane Boutatss — Accueil">
          Soufiane<span className="text-[#ff6b00]">.</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
          <Link href="/creation-site-web-casablanca" className="text-sm text-white/70 hover:text-white">Services</Link>
          <Link href="/portfolio" className="text-sm text-white/70 hover:text-white">Portfolio</Link>
          <Link href="/a-propos" className="text-sm text-white/70 hover:text-white">À propos</Link>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">Blog</Link>
          <Link href="/contact" className="rounded-full bg-[#ff6b00] px-5 py-2.5 text-sm font-bold text-white">
            Demander un devis
          </Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-white/15 px-4 py-2 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b00]">
            Menu
          </summary>
          <nav className="absolute right-0 mt-3 w-72 rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 shadow-2xl">
            {[...serviceLinks, { href: "/portfolio", label: "Portfolio" }, { href: "/a-propos", label: "À propos" }, { href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }].map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

