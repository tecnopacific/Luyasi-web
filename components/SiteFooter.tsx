import Link from "next/link";

import { site } from "@/app/config";
import { AbrazoMark, LEFT_ARC, RIGHT_ARC } from "./Abrazo";
import { StoreLinks } from "./StoreLinks";

const groups = [
  {
    title: "Ayuda",
    links: [
      { href: "/ayuda", label: "Ayuda inmediata" },
      { href: "/soporte", label: "Soporte" },
      { href: `mailto:${site.supportEmail}`, label: site.supportEmail },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidad", label: "Privacidad" },
      { href: "/terminos", label: "Términos" },
      { href: "/eliminar-cuenta", label: "Eliminar cuenta" },
    ],
  },
];

// El abrazo del inicio vuelve al final: los dos arcos, en el tono del fondo,
// cierran la página.
export function SiteFooter() {
  const year = new Date(site.legalUpdated).getUTCFullYear();
  return (
    <footer className="site-footer">
      <svg className="footer-arcs" viewBox="300 185 655 640" aria-hidden="true">
        <path d={LEFT_ARC} />
        <path d={RIGHT_ARC} />
      </svg>
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark" aria-label="Luyasi, inicio">
            <AbrazoMark size={52} />
            <span>Luyasi</span>
          </Link>
          <p className="footer-tagline">Un espacio para escucharte, a cualquier hora.</p>
          <StoreLinks height={44} className="footer-stores" />
        </div>

        {groups.map((group) => (
          <nav key={group.title} className="footer-group" aria-label={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("mailto:") ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer-base">
          <p>
            Luyasi es una inteligencia artificial. No es un guía religioso ni un terapeuta, y no sustituye la atención
            médica, psicológica ni de emergencias.
          </p>
          <p>
            © {year} Luyasi. Un producto de <a href={site.operator.website}>{site.operator.name}</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
