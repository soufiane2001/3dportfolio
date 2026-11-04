import { NextRequest, NextResponse } from "next/server";
import { ensureTables, getSql, isDatabaseConfigured } from "../../lib/db";
import { deviceFromUA, isBot, sourceFromReferrer } from "../../lib/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_DURATION_MS = 6 * 60 * 60 * 1000;

export async function POST(req: NextRequest) {
  if (!isDatabaseConfigured()) return new NextResponse(null, { status: 204 });
  if (req.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("bad json");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  const type = body.type;
  const sessionId = strOrNull(body.sessionId, 100);
  if (!sessionId || !["visit", "event", "duration"].includes(String(type))) {
    return NextResponse.json({ ok: false, error: "bad session or type" }, { status: 400 });
  }

  const path = (strOrNull(body.path, 300) ?? "/").split(/[?#]/)[0];
  if (!path.startsWith("/") || path.startsWith("//")) {
    return NextResponse.json({ ok: false, error: "bad path" }, { status: 400 });
  }
  if (/^\/(admin|api)(\/|$)/.test(path)) return new NextResponse(null, { status: 204 });

  const rawDuration = type === "duration" ? body.durationMs : 0;
  if (typeof rawDuration !== "number" || !Number.isFinite(rawDuration)) {
    return NextResponse.json({ ok: false, error: "bad duration" }, { status: 400 });
  }
  const durationMs = Math.round(Math.max(0, Math.min(rawDuration, MAX_DURATION_MS)));
  const pageViewId = strOrNull(body.pageViewId, 100);
  const ua = req.headers.get("user-agent");
  const bot = isBot(ua);

  try {
    await ensureTables();
    const sql = getSql();

    if (type === "event") {
      const name = strOrNull(body.name, 200) ?? "Unknown";
      await sql`
        INSERT INTO events (session_id, name, is_bot)
        VALUES (${sessionId}, ${name}, ${bot})
      `;
    } else {
      // Hosting-provided coarse location only. Do not accept client-supplied
      // cities, store raw IP/GPS, or infer a neighbourhood from an IP point.
      const country = strOrNull(req.headers.get("x-vercel-ip-country"), 2);
      const city = decodeHeader(req.headers.get("x-vercel-ip-city"), 200);
      const region = decodeHeader(req.headers.get("x-vercel-ip-country-region"), 100);
      const postalCode = decodeHeader(req.headers.get("x-vercel-ip-postal-code"), 32);
      const referrer = strOrNull(body.referrer, 1000);
      const source = sourceFromReferrer(referrer, strOrNull(body.utmSource, 100), req.headers.get("host"));
      const device = deviceFromUA(ua);

      if (pageViewId) {
        // Atomically compute this opening's positive increment and add it to
        // its page total. An early duration beacon creates the visit too.
        await sql`
          WITH sample AS (
            INSERT INTO visit_durations (session_id, path, page_view_id, duration_ms, delta_ms)
            VALUES (${sessionId}, ${path}, ${pageViewId}, ${durationMs}, ${durationMs})
            ON CONFLICT (session_id, path, page_view_id) DO UPDATE SET
              delta_ms = GREATEST(0, EXCLUDED.duration_ms - visit_durations.duration_ms),
              duration_ms = GREATEST(visit_durations.duration_ms, EXCLUDED.duration_ms)
            RETURNING delta_ms
          )
          INSERT INTO visits (session_id, path, country, city, region, postal_code,
                              source, referrer, device, is_bot, duration_ms, last_seen_at)
          SELECT ${sessionId}, ${path}, ${country}, ${city}, ${region}, ${postalCode},
                 ${source}, ${referrer}, ${device}, ${bot}, delta_ms, NOW() FROM sample
          ON CONFLICT (session_id, path) DO UPDATE SET
            duration_ms = visits.duration_ms + EXCLUDED.duration_ms,
            country = COALESCE(visits.country, EXCLUDED.country),
            city = COALESCE(visits.city, EXCLUDED.city),
            region = COALESCE(visits.region, EXCLUDED.region),
            postal_code = COALESCE(visits.postal_code, EXCLUDED.postal_code),
            is_bot = visits.is_bot OR EXCLUDED.is_bot,
            last_seen_at = GREATEST(visits.last_seen_at, EXCLUDED.last_seen_at)
        `;
      } else {
        // Compatibility with tabs opened before this release.
        await sql`
          INSERT INTO visits (session_id, path, country, city, region, postal_code,
                              source, referrer, device, is_bot, duration_ms, last_seen_at)
          VALUES (${sessionId}, ${path}, ${country}, ${city}, ${region}, ${postalCode},
                  ${source}, ${referrer}, ${device}, ${bot}, ${durationMs}, NOW())
          ON CONFLICT (session_id, path) DO UPDATE SET
            duration_ms = GREATEST(visits.duration_ms, EXCLUDED.duration_ms),
            city = COALESCE(visits.city, EXCLUDED.city),
            region = COALESCE(visits.region, EXCLUDED.region),
            postal_code = COALESCE(visits.postal_code, EXCLUDED.postal_code),
            last_seen_at = GREATEST(visits.last_seen_at, EXCLUDED.last_seen_at)
        `;
      }
    }
  } catch (err) {
    console.error("[track] error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function strOrNull(value: unknown, limit: number): string | null {
  if (typeof value !== "string") return null;
  return value.trim().slice(0, limit) || null;
}

function decodeHeader(value: string | null, limit: number): string | null {
  if (!value) return null;
  try {
    return strOrNull(decodeURIComponent(value), limit);
  } catch {
    return strOrNull(value, limit);
  }
}
