import { NextRequest, NextResponse } from "next/server";
import { ensureTables, getSql } from "../../lib/db";
import { deviceFromUA, isBot, sourceFromReferrer } from "../../lib/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Single tracking endpoint. The client sends:
 *   { type: "visit",    sessionId, path, referrer, utmSource }
 *   { type: "event",    sessionId, name }
 *   { type: "duration", sessionId, path, durationMs }   (via sendBeacon)
 *
 * Geo + bot classification are derived server-side so the client can't spoof
 * them and so bots never pollute the "real person" numbers.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  const type = String(body.type ?? "");
  const sessionId = String(body.sessionId ?? "").slice(0, 100);
  if (!sessionId) {
    return NextResponse.json({ ok: false, error: "no session" }, { status: 400 });
  }

  const ua = req.headers.get("user-agent");
  const bot = isBot(ua);

  try {
    await ensureTables();
    const sql = getSql();

    if (type === "visit") {
      const country = req.headers.get("x-vercel-ip-country");
      const city = decodeHeader(req.headers.get("x-vercel-ip-city"));
      const host = req.headers.get("host");
      const referrer = strOrNull(body.referrer);
      const source = sourceFromReferrer(referrer, strOrNull(body.utmSource), host);
      const path = (strOrNull(body.path) ?? "/").slice(0, 300);

      // One visit row per (session, path). Re-visits to the same path just
      // refresh the timestamp instead of creating duplicate rows.
      await sql`
        INSERT INTO visits (session_id, path, country, city, source, referrer, device, is_bot)
        VALUES (${sessionId}, ${path}, ${country}, ${city}, ${source}, ${referrer}, ${deviceFromUA(ua)}, ${bot})
        ON CONFLICT (session_id, path)
        DO UPDATE SET created_at = NOW()
      `;
    } else if (type === "event") {
      const name = (strOrNull(body.name) ?? "Unknown").slice(0, 200);
      await sql`
        INSERT INTO events (session_id, name, is_bot)
        VALUES (${sessionId}, ${name}, ${bot})
      `;
    } else if (type === "duration") {
      const path = (strOrNull(body.path) ?? "/").slice(0, 300);
      const durationMs = Math.max(0, Math.min(Number(body.durationMs) || 0, 6 * 60 * 60 * 1000));
      await sql`
        UPDATE visits SET duration_ms = GREATEST(duration_ms, ${durationMs})
        WHERE session_id = ${sessionId} AND path = ${path}
      `;
    } else {
      return NextResponse.json({ ok: false, error: "bad type" }, { status: 400 });
    }
  } catch (err) {
    console.error("[track] error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function strOrNull(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length ? t : null;
}

function decodeHeader(v: string | null): string | null {
  if (!v) return null;
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}
