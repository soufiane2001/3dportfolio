import { neon } from "@neondatabase/serverless";

/**
 * Neon Postgres client.
 *
 * `DATABASE_URL` is provided automatically by the Vercel ↔ Neon integration.
 * We instantiate lazily so that builds / pages that never touch the DB don't
 * crash when the env var is absent (e.g. during static analysis).
 */
let _sql: ReturnType<typeof neon> | null = null;

export function getSql() {
  if (_sql) return _sql;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Connect a Neon database in the Vercel dashboard (Storage tab) or add it to .env.local."
    );
  }
  _sql = neon(url);
  return _sql;
}

/**
 * Create the analytics tables on first use. `CREATE TABLE IF NOT EXISTS` is
 * cheap and idempotent, so we can safely call it from the track endpoint.
 */
let _ready: Promise<void> | null = null;

export function ensureTables() {
  if (_ready) return _ready;
  const sql = getSql();
  _ready = (async () => {
    // One row per page-view "session" on the site.
    await sql`
      CREATE TABLE IF NOT EXISTS visits (
        id            BIGSERIAL PRIMARY KEY,
        session_id    TEXT NOT NULL,
        path          TEXT NOT NULL DEFAULT '/',
        country       TEXT,
        city          TEXT,
        source        TEXT NOT NULL DEFAULT 'Direct',
        referrer      TEXT,
        device        TEXT,
        is_bot        BOOLEAN NOT NULL DEFAULT FALSE,
        duration_ms   INTEGER NOT NULL DEFAULT 0,
        created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS visits_session_path_idx ON visits (session_id, path)`;
    await sql`CREATE INDEX IF NOT EXISTS visits_created_idx ON visits (created_at)`;

    // One row per tracked interaction (button / link click).
    await sql`
      CREATE TABLE IF NOT EXISTS events (
        id          BIGSERIAL PRIMARY KEY,
        session_id  TEXT NOT NULL,
        name        TEXT NOT NULL,
        is_bot      BOOLEAN NOT NULL DEFAULT FALSE,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS events_created_idx ON events (created_at)`;
  })();
  return _ready;
}
