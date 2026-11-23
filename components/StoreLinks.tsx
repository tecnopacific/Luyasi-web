import { site } from "@/app/config";

// Insignias oficiales de Apple y Google (en español). Se muestran siempre,
// como las verá la persona; mientras la ficha no exista, la insignia no
// enlaza a ninguna parte.
const stores = [
  { key: "apple", src: "/stores/app-store.svg", ratio: 119.664 / 40, label: "Descargar en el App Store", href: site.appStoreUrl },
  { key: "google", src: "/stores/google-play.png", ratio: 646 / 192, label: "Disponible en Google Play", href: site.playStoreUrl },
];

export function StoreLinks({ height = 48, className = "" }: { height?: number; className?: string }) {
  return (
    <p className={`store-badges ${className}`.trim()}>
      {stores.map((s) => {
        // eslint-disable-next-line @next/next/no-img-element
        const badge = <img src={s.src} alt={s.label} width={Math.round(height * s.ratio)} height={height} />;
        return s.href ? (
          <a key={s.key} href={s.href}>
            {badge}
          </a>
        ) : (
          <span key={s.key}>{badge}</span>
        );
      })}
    </p>
  );
}
