"use client";

export default function AdminControls() {
  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.reload();
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => window.location.reload()}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/10"
      >
        Actualiser
      </button>
      <button
        onClick={logout}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/10"
      >
        Déconnexion
      </button>
    </div>
  );
}
