import Link from "next/link";

import { legalLinks, site } from "@/app/config";
import { AbrazoMark } from "./Abrazo";

export function SiteFooter() {
  const year = new Date(site.legalUpdated).getUTCFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <AbrazoMark size={44} />
          <p>
            Luyasi es una inteligencia artificial. No es un guía religioso ni un terapeuta, y no sustituye la atención
            médica, psicológica ni de emergencias.
          </p>
        </div>
        <nav aria-label="Legal y soporte" className="footer-links">
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="footer-meta">
          © {year} Luyasi. Un producto de <a href={site.operator.website}>{site.operator.name}</a>,{" "}
          {site.operator.location}. <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        </p>
      </div>
    </footer>
  );
}
