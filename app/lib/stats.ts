import { ensureTables, getSql } from "./db";

export type Bucket = { label: string; value: number };
export type DayPoint = { day: string; value: number };
export type VisitorSession = {
  sessionId: string;
  country: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  source: string;
  device: string | null;
  startedAt: string;
  lastSeenAt: string;
  durationMs: number;
  pages: { path: string; durationMs: number }[];
};

export type Stats = {
  uniqueVisitors: number;
  totalVisits: number;
  totalClicks: number;
  avgDurationMs: number;
  avgSessionDurationMs: number;
  totalDurationMs: number;
  topCountries: Bucket[];
  topCities: Bucket[];
  topSources: Bucket[];
  topPages: Bucket[];
  topClicks: Bucket[];
  topDevices: Bucket[];
  byDay: DayPoint[];
  recentVisitors: VisitorSession[];
};

/**
 * Aggregate all dashboard numbers for the last `days` days, counting only
 * visits not classified as bots (is_bot = FALSE).
 */
export async function getStats(days = 30): Promise<Stats> {
  await ensureTables();
  const sql = getSql();

  const [totals, countries, sources, pages, clicks, devices, daily, cities, visitors] =
    await Promise.all([
      sql`
        SELECT
          COUNT(DISTINCT session_id)::int AS unique_visitors,
          COUNT(*)::int                   AS total_visits,
          COALESCE(AVG(NULLIF(duration_ms, 0)), 0)::float AS avg_duration_ms,
          COALESCE(SUM(duration_ms), 0)::float AS total_duration_ms,
          COALESCE(SUM(duration_ms)::float / NULLIF(COUNT(DISTINCT session_id), 0), 0) AS avg_session_duration_ms
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
      sql`
        SELECT city || COALESCE(' · ' || country, '') AS label,
               COUNT(DISTINCT session_id)::int AS value
        FROM visits
        WHERE is_bot = FALSE AND city IS NOT NULL
          AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY 1 ORDER BY value DESC LIMIT 12
      `,
      sql`
        SELECT session_id,
          (array_agg(country ORDER BY created_at) FILTER (WHERE country IS NOT NULL))[1] AS country,
          (array_agg(city ORDER BY created_at) FILTER (WHERE city IS NOT NULL))[1] AS city,
          (array_agg(region ORDER BY created_at) FILTER (WHERE region IS NOT NULL))[1] AS region,
          (array_agg(postal_code ORDER BY created_at) FILTER (WHERE postal_code IS NOT NULL))[1] AS postal_code,
          (array_agg(source ORDER BY created_at))[1] AS source,
          (array_agg(device ORDER BY created_at))[1] AS device,
          MIN(created_at) AS started_at,
          MAX(COALESCE(last_seen_at, created_at)) AS last_seen_at,
          SUM(duration_ms)::float AS duration_ms,
          json_agg(json_build_object('path', path, 'durationMs', duration_ms) ORDER BY created_at) AS pages
        FROM visits
        WHERE is_bot = FALSE AND created_at >= NOW() - ${days} * INTERVAL '1 day'
        GROUP BY session_id ORDER BY last_seen_at DESC LIMIT 100
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
    avgSessionDurationMs: Number(t.avg_session_duration_ms ?? 0),
    totalDurationMs: Number(t.total_duration_ms ?? 0),
    topCountries: countries as Bucket[],
    topCities: cities as Bucket[],
    topSources: sources as Bucket[],
    topPages: pages as Bucket[],
    topClicks: clickBuckets,
    topDevices: devices as Bucket[],
    byDay: daily as DayPoint[],
    recentVisitors: (visitors as Record<string, unknown>[]).map((row) => ({
      sessionId: String(row.session_id),
      country: row.country as string | null,
      city: row.city as string | null,
      region: row.region as string | null,
      postalCode: row.postal_code as string | null,
      source: String(row.source),
      device: row.device as string | null,
      startedAt: new Date(row.started_at as string).toISOString(),
      lastSeenAt: new Date(row.last_seen_at as string).toISOString(),
      durationMs: Number(row.duration_ms),
      pages: row.pages as VisitorSession["pages"],
    })),
  };
}
