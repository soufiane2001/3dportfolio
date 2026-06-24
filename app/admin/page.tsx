import type { Metadata } from "next";
import { isAuthenticated } from "../lib/auth";
import { getStats } from "../lib/stats";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  if (!(await isAuthenticated())) {
    return <AdminLogin />;
  }

  const { days: daysParam } = await searchParams;
  const allowed = [7, 30, 90];
  const days = allowed.includes(Number(daysParam)) ? Number(daysParam) : 30;

  try {
    const stats = await getStats(days);
    return <Dashboard stats={stats} days={days} />;
  } catch (err) {
    console.error("[admin] stats error", err);
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4 text-center">
        <div className="max-w-md">
          <h1 className="mb-2 text-xl font-semibold text-white">
            Base de données non configurée
          </h1>
          <p className="text-sm text-white/60">
            Connecte une base Neon Postgres dans Vercel (onglet Storage) puis
            ajoute la variable <code className="text-orange-400">DATABASE_URL</code>.
            Les statistiques apparaîtront dès la première visite.
          </p>
        </div>
      </div>
    );
  }
}
