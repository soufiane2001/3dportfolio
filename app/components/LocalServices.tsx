import { englishServiceLinks } from "../lib/seo";
import { pageCopy } from "../i18n/page-copy";
import type { Locale } from "../i18n/translations";
import Link from "next/link";
import { serviceLinks } from "../lib/site";

export default function LocalServices({locale = "fr"}: {locale?: Locale}) {
  const copy = pageCopy[locale];
  return (
    <section className="border-y border-white/10 bg-[#050505] py-24 text-white" aria-labelledby="local-services-title">
      <div className="container">
        <p className="section-subtitle !text-start">{copy.tag}</p>
        <h2 id="local-services-title" className="mt-3 max-w-4xl text-3xl font-black md:text-5xl">{copy.heading}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">{copy.intro}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {(locale === "en" ? englishServiceLinks : serviceLinks).map((service, index) => (
            <Link key={service.href} href={service.href} className="group rounded-2xl border border-white/10 bg-white/[.03] p-6 hover:border-[#ff6b00]/50">
              <h3 className="text-xl font-bold group-hover:text-[#ff6b00]">{locale === "en" ? service.label : copy.services[index]}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{copy.detail}</p>
              <span className="mt-5 inline-block text-sm font-bold text-white/75">{copy.view}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
