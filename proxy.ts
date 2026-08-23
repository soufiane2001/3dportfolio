import { NextRequest, NextResponse } from "next/server";
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (request.headers.get("host") === "soufianeboutatss.sbs") { url.protocol="https"; url.host="www.soufianeboutatss.sbs"; return NextResponse.redirect(url, 301); }
  if (url.pathname === "/referencement-seo-casablanca") { url.pathname="/casablanca/seo"; return NextResponse.redirect(url, 301); }
  if (url.pathname === "/creation-site-internet-casablanca") { url.pathname="/creation-site-web-casablanca"; return NextResponse.redirect(url, 301); }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.svg).*)"] };
