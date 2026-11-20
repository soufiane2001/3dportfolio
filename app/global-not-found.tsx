import type { Metadata } from "next";
import "./globals.css";
import NotFoundContent from "./components/NotFoundContent";

export const metadata: Metadata = {
  title: "Page introuvable | Soufiane Boutatss",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return <html lang="fr" data-scroll-behavior="smooth"><body className="antialiased"><NotFoundContent /></body></html>;
}
