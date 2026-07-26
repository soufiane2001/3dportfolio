import Link from "next/link";
import { EMAIL, serviceLinks, whatsappUrl } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="text-xl font-black text-white">Soufiane Boutatss</p>
          <p className="mt-3 text-sm leading-6 text-white/55">
            Développeur web freelance et créateur de sites internet. Services disponibles à Casablanca et au Maroc.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((link) => <li key={link.href}><Link className="text-sm text-white/55 hover:text-[#ff6b00]" href={link.href}>{link.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="text-white/55 hover:text-[#ff6b00]" href="/portfolio">Réalisations</Link></li>
            <li><Link className="text-white/55 hover:text-[#ff6b00]" href="/a-propos">À propos</Link></li>
            <li><Link className="text-white/55 hover:text-[#ff6b00]" href="/blog">Blog</Link></li>
            <li><Link className="text-white/55 hover:text-[#ff6b00]" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <p className="mt-4 text-sm text-white/55">Zone de service : Casablanca, Maroc</p>
          <a className="mt-2 block text-sm text-white/70 hover:text-[#ff6b00]" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="mt-4 inline-block rounded-full border border-[#ff6b00]/50 px-4 py-2 text-sm font-bold text-[#ff6b00]" href={whatsappUrl("Bonjour Soufiane, je souhaite discuter de mon projet web.")}>WhatsApp</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Soufiane Boutatss. Tous droits réservés.
      </div>
    </footer>
  );
}

