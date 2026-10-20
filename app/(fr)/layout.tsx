import RootDocument from "../components/RootDocument";
export { metadata } from "../components/RootDocument";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="fr">{children}</RootDocument>;
}
