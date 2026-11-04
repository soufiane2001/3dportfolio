"use client";

import { useState } from "react";
import type { VisitorSession } from "../lib/stats";
import { countryFlag, formatDuration } from "../lib/analytics";

const dateFormat = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "short", timeStyle: "short", timeZone: "Europe/Kiev",
});
const countries = new Intl.DisplayNames(["fr"], { type: "region" });
const devices: Record<string, string> = { Desktop: "Ordinateur", Mobile: "Mobile", Tablet: "Tablette" };

function countryName(code: string | null) {
  if (!code || !/^[A-Z]{2}$/i.test(code)) return "Pays non disponible";
  return countries.of(code.toUpperCase()) ?? code;
}

export default function VisitorSessions({ visitors }: { visitors: VisitorSession[] }) {
  const [search, setSearch] = useState("");
  const query = search.trim().toLocaleLowerCase("fr");
  const visible = visitors.filter((visitor) => [
    visitor.sessionId, visitor.city, visitor.region, visitor.postalCode,
    visitor.country, countryName(visitor.country), visitor.source,
    ...visitor.pages.map((page) => page.path),
  ].join(" ").toLocaleLowerCase("fr").includes(query));

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5" aria-labelledby="visitor-sessions-title">
      <div className="p-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="visitor-sessions-title" className="font-medium text-white">Détail des visites</h2>
            <p className="mt-1 text-xs text-white/50">
              Les 100 dernières sessions de la période · Horaires de Kyiv.
            </p>
          </div>
          <div>
            <label htmlFor="visitor-search" className="mb-1 block text-xs text-white/60">Filtrer les sessions affichées</label>
            <input
              id="visitor-search" type="search" value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ville, pays, page, source…"
              className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:w-64"
            />
          </div>
        </div>
        <p className="mt-4 max-w-4xl text-xs leading-5 text-white/50">
          La ville, la région et le code postal sont des estimations du réseau et peuvent être absents
          ou différents avec un VPN ou une connexion mobile. Le quartier exact n’est pas disponible
          à partir de l’IP. Les anciennes visites peuvent ne pas avoir de zone renseignée.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px] text-left text-sm">
          <caption className="sr-only">Sessions anonymes, localisation estimée, durée visible et pages consultées</caption>
          <thead className="border-y border-white/10 bg-black/20 text-xs text-white/60">
            <tr>
              {["Session / source", "Ville / pays estimés", "Zone estimée", "Arrivée", "Dernier passage", "Temps sur site", "Pages"].map((label) => (
                <th key={label} scope="col" className="px-4 py-3 font-medium">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {visible.length === 0 ? (
              <tr><td colSpan={7} className="px-5 py-10 text-center text-white/45">
                {visitors.length ? "Aucune session ne correspond à ce filtre." : "Aucune visite enregistrée pour cette période."}
              </td></tr>
            ) : visible.map((visitor) => (
              <tr key={visitor.sessionId} className="align-top text-white/75">
                <td className="px-4 py-4">
                  <span className="font-mono text-xs text-white/90">{visitor.sessionId.slice(0, 8)}</span>
                  <div className="mt-1 max-w-40 break-words text-xs text-white/45">{visitor.source}</div>
                  <div className="mt-1 text-xs text-white/45">{devices[visitor.device ?? ""] ?? "Appareil non disponible"}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="max-w-44 break-words text-white/90">{visitor.city || "Ville non disponible"}</div>
                  <div className="mt-1 text-xs text-white/45">{countryFlag(visitor.country)} {countryName(visitor.country)}</div>
                </td>
                <td className="px-4 py-4 text-xs leading-5 text-white/55">
                  {visitor.region && <div>Région : {visitor.region}</div>}
                  {visitor.postalCode && <div>Code postal : {visitor.postalCode}</div>}
                  {!visitor.region && !visitor.postalCode && "Non disponible"}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-xs tabular-nums"><time dateTime={visitor.startedAt}>{dateFormat.format(new Date(visitor.startedAt))}</time></td>
                <td className="whitespace-nowrap px-4 py-4 text-xs tabular-nums"><time dateTime={visitor.lastSeenAt}>{dateFormat.format(new Date(visitor.lastSeenAt))}</time></td>
                <td className="whitespace-nowrap px-4 py-4 font-medium tabular-nums text-orange-400">{formatDuration(visitor.durationMs)}</td>
                <td className="px-4 py-4">
                  <details>
                    <summary className="cursor-pointer whitespace-nowrap text-xs text-white/70">{visitor.pages.length} page{visitor.pages.length > 1 ? "s" : ""}</summary>
                    <ul className="mt-3 space-y-2 text-xs">
                      {visitor.pages.map((page) => <li key={page.path} className="max-w-56 break-words">
                        <span>{page.path}</span><span className="mt-0.5 block text-white/40">{formatDuration(page.durationMs)}</span>
                      </li>)}
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs text-white/40" aria-live="polite">
        {visible.length} session{visible.length > 1 ? "s" : ""} affichée{visible.length > 1 ? "s" : ""}. Utilise « Actualiser » pour obtenir les dernières données.
      </p>
    </section>
  );
}
