import Image from "next/image";
import Link from "next/link";

import { nav } from "@/app/config";

// Como en la app: nombre, aviso permanente de IA y «Ayuda» siempre visible.
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand" aria-label="Luyasi, inicio">
          <span className="brand-symbol">
            <Image src="/brand/luyasi-symbol.png" alt="" width={44} height={44} priority />
          </span>
          <span className="brand-text">
            <span className="brand-name">Luyasi</span>
            <span className="brand-note">Acompañante virtual con IA</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/ayuda" className="help-pill">
          Ayuda
        </Link>
      </div>
    </header>
  );
}
