import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_SESSION_MAX_AGE, checkPassword, makeToken } from "../../../lib/auth";

export const runtime = "nodejs";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

export async function POST(req: NextRequest) {
  if (req.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ ok: false }, { status: 403 });
  }
  let password = "";
  try {
    const body = await req.json();
    if (typeof body?.password === "string") password = body.password;
  } catch {
    /* ignore */
  }

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "La connexion à l’administration est indisponible." },
      { status: 503 }
    );
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ ok: false, error: "Mot de passe incorrect." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, makeToken(password), {
    ...cookieOptions,
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
  return res;
}

export async function DELETE(req: NextRequest) {
  if (req.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ ok: false }, { status: 403 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  return res;
}
