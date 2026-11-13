import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "sb_admin";
export const ADMIN_SESSION_MAX_AGE = 30 * 24 * 60 * 60;

function signExpiry(password: string, expiresAt: string): string {
  return createHmac("sha256", password).update(`portfolio-admin-v2:${expiresAt}`).digest("hex");
}

/** Sign the expiry so the server enforces the same lifetime as the cookie. */
export function makeToken(password: string): string {
  const expiresAt = String(Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE);
  return `${expiresAt}.${signExpiry(password, expiresAt)}`;
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return safeEqual(input, expected);
}

/** Read the admin cookie and verify it matches the current password. */
export async function isAuthenticated(): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const token = (await cookies()).get(ADMIN_COOKIE)?.value ?? "";
  const match = /^(\d{1,12})\.([a-f0-9]{64})$/.exec(token);
  if (!match) return false;
  const [, expiresAt, signature] = match;
  return Number(expiresAt) > Math.floor(Date.now() / 1000) && safeEqual(signature, signExpiry(expected, expiresAt));
}
