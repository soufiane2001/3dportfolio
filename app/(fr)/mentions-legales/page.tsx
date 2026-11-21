import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { EMAIL, OWNER, pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "/mentions-legales",
  `Mentions légales | ${OWNER}`,
  "Coordonnées de l’éditeur et de l’hébergeur du portfolio de Soufiane Boutatss."
);

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="container min-h-[60vh] py-20 text-foreground">
        <h1 className="text-4xl font-medium">Mentions légales</h1>
        <div className="mt-8 max-w-3xl space-y-8 leading-8 text-foreground/75">
          <section aria-labelledby="legal-publisher">
            <h2 id="legal-publisher" className="mb-2 text-xl font-medium text-foreground">Édition du site</h2>
            <p>Ce site présente les services et réalisations de {OWNER}, développeur web freelance.</p>
            <p>Pour contacter l’éditeur, écrivez à <a className="text-[#0064a8]" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          </section>
          <section aria-labelledby="legal-hosting">
            <h2 id="legal-hosting" className="mb-2 text-xl font-medium text-foreground">Hébergement</h2>
            <address className="not-italic">
              Vercel Inc.<br />
              440 N Barranca Avenue #4133<br />
              Covina, CA 91723, États-Unis
            </address>
            <p><a className="text-[#0064a8]" href="https://vercel.com/contact">Contacter Vercel</a></p>
          </section>
          <Link className="inline-block text-[#0064a8]" href="/politique-confidentialite">Consulter la politique de confidentialité</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
