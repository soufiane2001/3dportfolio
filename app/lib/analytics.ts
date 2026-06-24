/** Server-side helpers for classifying incoming visits. */

// Common crawlers, monitoring agents and headless tooling. Visits whose
// user-agent matches are flagged `is_bot` and excluded from the dashboard.
const BOT_PATTERN =
  /bot|crawler|spider|crawl|slurp|mediapartners|facebookexternalhit|embedly|quora|outbrain|pinterest|developers\.google|bingpreview|whatsapp|telegrambot|discordbot|headlesschrome|phantomjs|puppeteer|playwright|lighthouse|gtmetrix|pingdom|uptimerobot|semrush|ahrefs|dotbot|mj12bot|petalbot|yandex|baiduspider|sogou|python-requests|axios|curl|wget|go-http|node-fetch|java\/|okhttp|apache-httpclient/i;

export function isBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) return true; // No UA at all → almost always automated.
  return BOT_PATTERN.test(userAgent);
}

export function deviceFromUA(userAgent: string | null | undefined): string {
  if (!userAgent) return "Unknown";
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) return "Tablet";
  if (/mobi|android|iphone|ipod|phone/i.test(userAgent)) return "Mobile";
  return "Desktop";
}

/**
 * Turn a referrer URL (and optional ?utm_source) into a readable traffic
 * source bucket. Returns "Direct" when there is no referrer.
 */
export function sourceFromReferrer(
  referrer: string | null | undefined,
  utmSource?: string | null,
  selfHost?: string | null
): string {
  if (utmSource) return capitalize(utmSource);
  if (!referrer) return "Direct";

  let host: string;
  try {
    host = new URL(referrer).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "Direct";
  }

  if (selfHost && host === selfHost.replace(/^www\./, "").toLowerCase()) {
    return "Direct";
  }

  const map: Array<[RegExp, string]> = [
    [/google\./, "Google"],
    [/bing\./, "Bing"],
    [/duckduckgo\./, "DuckDuckGo"],
    [/yahoo\./, "Yahoo"],
    [/yandex\./, "Yandex"],
    [/(facebook\.|fb\.com|fb\.me)/, "Facebook"],
    [/(linkedin\.|lnkd\.in)/, "LinkedIn"],
    [/instagram\./, "Instagram"],
    [/(twitter\.|x\.com|t\.co)/, "X / Twitter"],
    [/(youtube\.|youtu\.be)/, "YouTube"],
    [/github\./, "GitHub"],
    [/(reddit\.|redd\.it)/, "Reddit"],
    [/(t\.me|telegram\.)/, "Telegram"],
    [/(whatsapp\.|wa\.me)/, "WhatsApp"],
    [/tiktok\./, "TikTok"],
  ];

  for (const [re, label] of map) if (re.test(host)) return label;
  return host;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** ISO-3166 alpha-2 → flag emoji (e.g. "MA" → 🇲🇦). */
export function countryFlag(code: string | null | undefined): string {
  if (!code || code.length !== 2) return "🏳️";
  const A = 0x1f1e6;
  const cc = code.toUpperCase();
  return String.fromCodePoint(
    A + cc.charCodeAt(0) - 65,
    A + cc.charCodeAt(1) - 65
  );
}
