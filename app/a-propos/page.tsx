import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { absoluteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "À Propos de Soufiane Boutatss | Développeur Web",
  description: "Découvrez le parcours, l’expérience, les compétences et la méthode de travail de Soufiane Boutatss, développeur web et mobile Full Stack.",
  alternates: { canonical: absoluteUrl("/a-propos") },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black py-24 text-white">
        <article className="container max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="section-subtitle">À propos</p>
              <h1 className="mt-3 text-4xl font-black md:text-6xl">Soufiane Boutatss, développeur Web & Mobile Full Stack</h1>
              <p className="mt-7 text-lg leading-8 text-white/60">Je conçois des sites internet, applications web et applications mobiles pour transformer un besoin métier en une solution claire, performante et maintenable. Mes services sont disponibles à Casablanca, au Maroc et à distance.</p>
              <p className="mt-5 leading-8 text-white/60">Mon parcours présenté sur ce site couvre le frontend avec React et Next.js, le mobile avec React Native et Expo, ainsi que le backend avec Laravel, PHP, MySQL, Firebase et les APIs REST.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/portfolio" className="rounded-full bg-[#ff6b00] px-6 py-3 font-bold">Voir mes réalisations</Link>
                <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 font-bold">Me contacter</Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <Image src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1778368246/Gemini_Generated_Image_ac7qxeac7qxeac7q_t0xski.png" alt="Soufiane Boutatss, développeur web et mobile Full Stack" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <section className="mt-20 border-y border-white/10 py-14">
            <h2 className="text-3xl font-black">Expérience et preuves</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[["30+", "projets web et mobile réalisés"], ["34+", "clients accompagnés"], ["6+", "années d’expérience"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 p-6"><p className="text-4xl font-black text-[#ff6b00]">{value}</p><p className="mt-2 text-white/60">{label}</p></div>
              ))}
            </div>
          </section>
          <section className="py-16">
            <h2 className="text-3xl font-black">Une méthode centrée sur le besoin</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="glass-card p-7"><h3 className="text-xl font-bold">Comprendre</h3><p className="mt-3 text-white/55">Clarifier les objectifs, utilisateurs, contraintes et priorités avant de choisir une technologie.</p></div>
              <div className="glass-card p-7"><h3 className="text-xl font-bold">Construire</h3><p className="mt-3 text-white/55">Valider progressivement le design et les fonctionnalités avec des échanges directs.</p></div>
              <div className="glass-card p-7"><h3 className="text-xl font-bold">Faire évoluer</h3><p className="mt-3 text-white/55">Livrer une base maintenable et documenter les choix nécessaires à la suite du projet.</p></div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

