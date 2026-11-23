import Link from "next/link";

import { legalLinks } from "@/app/config";

const dateFormat = new Intl.DateTimeFormat("es-CO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function DocPage({
  path,
  title,
  summary,
  updated,
  children,
}: {
  path: string;
  title: string;
  summary: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main id="contenido">
      <div className="doc-hero">
        <div className="doc-hero-inner">
          <h1>{title}</h1>
          <p>{summary}</p>
          {updated ? (
            <p className="doc-updated">
              Última actualización: <time dateTime={updated}>{dateFormat.format(new Date(updated))}</time>
            </p>
          ) : null}
        </div>
      </div>
      <div className="doc-layout">
        <nav className="doc-aside" aria-label="Documentos">
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={item.href === path ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <article className="doc">
          {children}
        </article>
      </div>
    </main>
  );
}
