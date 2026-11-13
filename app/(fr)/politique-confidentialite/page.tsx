import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { PrivacySettingsButton } from "../../components/SitePrivacy";
import { EMAIL, pageMetadata } from "../../lib/site";

export const metadata: Metadata = pageMetadata(
  "/politique-confidentialite",
  "Politique de confidentialité | Soufiane Boutatss",
  "Informations sur les données de contact, la mesure des visites et les préférences de confidentialité du portfolio."
);

export default function Page() {
  return <>
    <SiteHeader />
    <main className="container min-h-[60vh] py-20 text-white">
      <h1 className="text-4xl font-medium">Politique de confidentialité</h1>
      <div className="mt-8 max-w-3xl space-y-5 leading-8 text-white/75">
        <h2 className="text-xl font-medium text-white">Demandes de contact</h2>
        <p>Soufiane Boutatss utilise les informations que vous lui envoyez pour répondre à votre demande et étudier votre projet. Le formulaire prépare un message qui s’ouvre dans WhatsApp, où vous décidez de l’envoyer. Vous pouvez aussi prendre contact par e-mail.</p>
        <h2 className="text-xl font-medium text-white">Mesure des visites</h2>
        <p>Si vous l’autorisez, un identifiant aléatoire conservé dans le stockage de session relie les pages consultées, le temps de lecture et les interactions d’un même onglet. Le suivi enregistre le type d’appareil et le site d’origine. Vercel fournit une estimation de la ville, du pays, de la région et parfois du code postal. Les statistiques sont conservées dans une base Neon accessible depuis l’administration protégée du site.</p>
        <h2 className="text-xl font-medium text-white">Publicité</h2>
        <p>Si vous l’autorisez, la balise Google Ads est chargée et des bannières peuvent s’afficher via la régie qui les diffuse depuis highperformanceformat.com.</p>
        <h2 className="text-xl font-medium text-white">Vos choix</h2>
        <p>Votre navigateur mémorise vos choix pendant 180 jours. Vous pouvez modifier ou retirer une autorisation à tout moment.</p>
        <PrivacySettingsButton />
        <p>Pour une demande d’accès, de correction ou de suppression, contactez <a className="text-[#f08b9b]" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </div>
    </main>
    <SiteFooter />
  </>;
}
