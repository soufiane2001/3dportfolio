import { ensureTables, getSql } from "./db";

export type Bucket = { label: string; value: number };
export type DayPoint = { day: string; value: number };

export type Stats = {
  uniqueVisitors: number;
  totalVisits: number;
  totalClicks: number;
  avgDurationMs: number;
  topCountries: Bucket[];
  topSources: Bucket[];
  topPages: Bucket[];
  topClicks: Bucket[];
  topDevices: Bucket[];
  byDay: DayPoint[];
};

/**
 * Aggregate all dashboard numbers for the last `days` days, counting only
 * real people (is_bot = FALSE).
 */
export async function getStats(days = 30): Promise<Stats> {
  await ensureTables();
  const sql = getSql();

  const [totals, countries, sources, pages, clicks, devices, daily] =
    await Promise.all([
      sql`
        SELECT
          COUNT(DISTINCT session_id)::int AS unique_visitors,
          COUNT(*)::int                   AS total_visits,
          COALESCE(AVG(NULLIF(duration_ms, 0)), 0)::float AS avg_duration_ms
        FROM visits
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
      `,
      sql`
        SELECT COALESCE(country, '??') AS label, COUNT(DISTINCT session_id)::int AS value
        FROM visits
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY 1 ORDER BY value DESC LIMIT 12
      `,
      sql`
        SELECT source AS label, COUNT(DISTINCT session_id)::int AS value
        FROM visits
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY 1 ORDER BY value DESC LIMIT 12
      `,
      sql`
        SELECT path AS label, COUNT(*)::int AS value
        FROM visits
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY 1 ORDER BY value DESC LIMIT 12
      `,
      sql`
        SELECT name AS label, COUNT(*)::int AS value
        FROM events
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY 1 ORDER BY value DESC LIMIT 15
      `,
      sql`
        SELECT COALESCE(device, 'Unknown') AS label, COUNT(DISTINCT session_id)::int AS value
        FROM visits
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY 1 ORDER BY value DESC
      `,
      sql`
        SELECT to_char(date_trunc('day', created_at), 'YYYY-MM-DD') AS day,
               COUNT(DISTINCT session_id)::int AS value
        FROM visits
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY 1 ORDER BY 1 ASC
      `,
    ]);

  const t = (totals as Record<string, unknown>[])[0] ?? {};
  const clickBuckets = clicks as Bucket[];
  const totalClicks = clickBuckets.reduce((s, r) => s + Number(r.value), 0);

  return {
    uniqueVisitors: Number(t.unique_visitors ?? 0),
    totalVisits: Number(t.total_visits ?? 0),
    totalClicks,
    avgDurationMs: Number(t.avg_duration_ms ?? 0),
    topCountries: countries as Bucket[],
    topSources: sources as Bucket[],
    topPages: pages as Bucket[],
    topClicks: clickBuckets,
    topDevices: devices as Bucket[],
    byDay: daily as DayPoint[],
  };
}
