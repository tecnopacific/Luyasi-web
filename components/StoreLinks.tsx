import { site } from "@/app/config";

// Mientras no haya fichas publicadas, se dice claramente en lugar de mostrar
// botones que no llevan a ninguna parte.
export function StoreLinks() {
  const stores = [
    { href: site.appStoreUrl, label: "Descargar en App Store" },
    { href: site.playStoreUrl, label: "Descargar en Google Play" },
  ].filter((s) => s.href);

  if (stores.length === 0) {
    return <p className="store-soon">Muy pronto en App Store y Google Play.</p>;
  }
  return (
    <p className="store-links">
      {stores.map((s) => (
        <a key={s.href} className="button" href={s.href}>
          {s.label}
        </a>
      ))}
    </p>
  );
}
