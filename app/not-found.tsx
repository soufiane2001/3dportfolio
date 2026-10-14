import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] items-center bg-background py-24 text-white">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[.3em] text-[#ed687b]">Erreur 404</p>
          <h1 className="mt-5 text-5xl font-medium">Page introuvable</h1>
          <p className="mt-5 text-white/60">Cette adresse n’existe plus ou contient une erreur. Retrouvez les services ou contactez directement Soufiane.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/" className="rounded-full bg-primary px-6 py-3 font-bold">Retour à l’accueil</Link>
            <Link href="/creation-site-web-casablanca" className="rounded-full border border-white/20 px-6 py-3 font-bold">Voir les services</Link>
            <Link href="/contact" className="px-5 py-3 font-bold text-white/70">Contacter Soufiane</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

