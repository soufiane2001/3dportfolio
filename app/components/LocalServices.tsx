import { englishServiceLinks } from "../lib/seo";
import { pageCopy } from "../i18n/page-copy";
import type { Locale } from "../i18n/translations";
import Link from "next/link";
import { serviceLinks } from "../lib/site";

export default function LocalServices({locale = "fr"}: {locale?: Locale}) {
  const copy = pageCopy[locale];
  return (
    <section className="okc-local-services section-padding text-foreground" aria-labelledby="local-services-title">
      <div className="container">
        <p className="section-subtitle !text-start">{copy.tag}</p>
        <h2 id="local-services-title" className="mt-3 max-w-4xl section-heading">{copy.heading}</h2>
        <p className="mt-6 max-w-3xl body-copy">{copy.intro}</p>
        {locale === "fr" && <Link href="/services" className="mt-5 inline-block text-[#b80019] underline underline-offset-4">Comparer les prestations : site, boutique, application ou maintenance</Link>}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {(locale === "en" ? englishServiceLinks : serviceLinks).map((service, index) => (
            <Link key={service.href} href={service.href} className="content-card group rounded-2xl border border-black/10 bg-black/[.03] p-6 hover:border-[#e60020]/50">
              <h3 className="text-xl font-bold group-hover:text-[#e60020]">{locale === "en" ? service.label : copy.services[index]}</h3>
              <p className="mt-3 body-copy">{copy.serviceDetails[index]}</p>
              <span className="card-link inline-block text-foreground/85">{copy.view}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
