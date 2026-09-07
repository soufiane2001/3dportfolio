import { landingPages } from "./landing-pages";
import { absoluteUrl } from "./site";

export const homeLanguages = { fr: absoluteUrl("/fr"), en: absoluteUrl("/en"), ar: absoluteUrl("/ar"), "x-default": absoluteUrl("/fr") };

const englishServices: Record<string, string> = {
  "developpeur-web-freelance": "freelance-web-developer",
  "developpeur-react": "react-developer",
  "developpeur-nextjs": "nextjs-developer",
  "developpeur-php": "php-developer",
  "developpement-web-sur-mesure": "full-stack-developer",
};

// Build each equivalent service group once, identically for every member.
// Country hubs and different services are not translation alternatives.
export function landingLanguages(path: string): Record<string, string> | undefined {
  const parts = path.split("/").filter(Boolean);
  const service = parts[0] === "en"
    ? Object.entries(englishServices).find(([, english]) => english === parts[1])?.[0]
    : parts.at(-1);
  if (!service || !landingPages.some(page => page.path === `/${service}`)) return undefined;
  const candidates: Record<string, string> = {
    fr: `/${service}`, "fr-FR": `/france/${service}`, "fr-CA": `/canada/${service}`,
    "fr-BE": `/belgique/${service}`, "fr-CH": `/suisse/${service}`,
    ...(englishServices[service] ? { en: `/en/${englishServices[service]}` } : {}),
  };
  const existing = Object.entries(candidates).filter(([, url]) => landingPages.some(page => page.path === url));
  if (!existing.some(([, url]) => url === path) || existing.length < 2) return undefined;
  return Object.fromEntries([...existing, ["x-default", `/${service}`]].map(([lang, url]) => [lang, absoluteUrl(url)]));
}

export const englishServiceLinks = [
  { href: "/en/web-development-services", label: "Web development services" },
  { href: "/en/full-stack-developer", label: "Custom full stack development" },
  { href: "/en/react-developer", label: "React development" },
  { href: "/en/nextjs-developer", label: "Next.js development" },
  { href: "/en/php-developer", label: "PHP development" },
  { href: "/en/freelance-web-developer", label: "Freelance web developer" },
];
