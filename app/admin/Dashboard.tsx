import Link from "next/link";
import type { Bucket, DayPoint, Stats } from "../lib/stats";
import { countryFlag, formatDuration } from "../lib/analytics";
import AdminControls from "./AdminControls";
import VisitorSessions from "./VisitorSessions";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm text-white/50">{label}</div>
      <div className="mt-1 text-2xl font-semibold tabular-nums text-white sm:text-3xl">{value}</div>
    </div>
  );
}

function BarList({
  title,
  items,
  flags = false,
  empty = "Aucune donnée",
}: {
  title: string;
  items: Bucket[];
  flags?: boolean;
  empty?: string;
}) {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-4 text-sm font-medium text-white/70">{title}</h2>
      {items.length === 0 ? (
        <p className="text-sm text-white/30">{empty}</p>
      ) : (
        <ul className="space-y-2.5">
          {items.map((it, i) => (
            <li key={i}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="truncate pr-3 text-white/80">
                  {flags ? `${countryFlag(it.label)} ${it.label}` : it.label}
                </span>
                <span className="shrink-0 tabular-nums text-white/50">{it.value}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{ width: `${(it.value / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TrendChart({ data }: { data: DayPoint[] }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-4 text-sm font-medium text-white/70">Visiteurs par jour</h2>
      {data.length === 0 ? (
        <p className="text-sm text-white/30">Aucune donnée</p>
      ) : (
        <div className="flex h-40 items-end gap-1">
          {data.map((d) => (
            <div key={d.day} className="group flex h-full flex-1 flex-col items-center justify-end">
              <div
                className="w-full rounded-t bg-orange-500/80 transition group-hover:bg-orange-400"
                style={{ height: `${(d.value / max) * 100}%` }}
                title={`${d.day}: ${d.value}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const RANGES = [
  { days: 7, label: "7 j" },
  { days: 30, label: "30 j" },
  { days: 90, label: "90 j" },
];

export default function Dashboard({ stats, days }: { stats: Stats; days: number }) {
  return (
    <div className="min-h-screen bg-black px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">Statistiques visiteurs</h1>
            <p className="text-sm text-white/50">
              Sessions par onglet, sans nom. Les robots connus sont exclus.
            </p>
          </div>
          <AdminControls />
        </header>

        <div className="mb-6 flex gap-2">
          {RANGES.map((r) => (
            <Link
              key={r.days}
              href={`/admin?days=${r.days}`}
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                r.days === days
                  ? "bg-orange-500 text-black"
                  : "border border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              {r.label}
            </Link>
          ))}
        </div>

        <div className="mb-3 grid grid-cols-2 gap-4 lg:grid-cols-5">
          <StatCard label="Sessions" value={String(stats.uniqueVisitors)} />
          <StatCard label="Pages consultées" value={String(stats.totalVisits)} />
          <StatCard label="Temps cumulé" value={formatDuration(stats.totalDurationMs)} />
          <StatCard label="Temps moyen / session" value={formatDuration(stats.avgSessionDurationMs)} />
          <StatCard label="Interactions" value={String(stats.totalClicks)} />
        </div>
        <p className="mb-6 text-xs leading-5 text-white/45">
          Temps mesuré lorsque l’onglet est visible, enregistré toutes les 15 secondes et au départ.
          {" "}Moyenne par page : {formatDuration(stats.avgDurationMs)}.
          {" "}Une même page est regroupée par session, y compris lors d’un retour.
          {" "}Le calcul du temps visible s’applique aux nouvelles visites.
        </p>

        <div className="mb-6">
          <VisitorSessions visitors={stats.recentVisitors} />
        </div>

        <div className="mb-6">
          <TrendChart data={stats.byDay} />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <BarList title="Pays" items={stats.topCountries} flags />
          <BarList title="Villes estimées" items={stats.topCities} />
          <BarList title="Sources de trafic" items={stats.topSources} />
          <BarList title="Interactions fréquentes" items={stats.topClicks} />
          <BarList title="Appareils" items={stats.topDevices} />
          <BarList title="Pages" items={stats.topPages} />
        </div>
      </div>
    </div>
  );
}
