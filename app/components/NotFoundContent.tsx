import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] items-center bg-background py-24 text-foreground">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[.3em] text-[#37003c]">Erreur 404</p>
          <h1 className="mt-5 text-5xl font-medium">Page introuvable</h1>
          <p className="mt-5 text-foreground/65">Cette adresse n’existe plus ou contient une erreur. Retrouvez les services ou contactez directement Soufiane.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/" className="rounded-full bg-primary px-6 py-3 font-bold text-white">Retour à l’accueil</Link>
            <Link href="/services" className="rounded-full border border-black/20 px-6 py-3 font-bold">Voir les services</Link>
            <Link href="/contact" className="px-5 py-3 font-bold text-foreground/70">Contacter Soufiane</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

