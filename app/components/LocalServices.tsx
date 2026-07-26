import Link from "next/link";
import { serviceLinks } from "../lib/site";

export default function LocalServices() {
  return (
    <section className="border-y border-white/10 bg-[#050505] py-24 text-white" aria-labelledby="local-services-title">
      <div className="container">
        <p className="section-subtitle">Services web à Casablanca</p>
        <h2 id="local-services-title" className="mt-3 max-w-4xl text-3xl font-black md:text-5xl">Un site professionnel conçu pour développer votre activité</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">J’accompagne entreprises, indépendants, commerces, professions libérales, PME et startups avec un interlocuteur unique, du cadrage à la mise en ligne.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map((service) => (
            <Link key={service.href} href={service.href} className="group rounded-2xl border border-white/10 bg-white/[.03] p-6 hover:border-[#ff6b00]/50">
              <h3 className="text-xl font-bold group-hover:text-[#ff6b00]">{service.label}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">Approche, livrables, processus et réponses aux questions fréquentes.</p>
              <span className="mt-5 inline-block text-sm font-bold text-white/75">Voir le service →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
