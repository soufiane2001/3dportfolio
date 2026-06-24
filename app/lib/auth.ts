import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "sb_admin";

/**
 * Deterministic session token derived from the admin password. The raw
 * password is never stored in the cookie — only its HMAC. Changing
 * ADMIN_PASSWORD instantly invalidates every existing session.
 */
export function makeToken(password: string): string {
  return createHmac("sha256", "sb-admin-v1").update(password).digest("hex");
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
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  return safeEqual(token, makeToken(expected));
}
