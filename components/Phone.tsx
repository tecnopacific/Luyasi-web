import Image from "next/image";

// Capturas reales de la app (390 × 844 puntos), generadas desde su código.
export function Phone({ shot, alt, priority = false }: { shot: string; alt: string; priority?: boolean }) {
  return (
    <span className="phone">
      <span className="phone-screen">
        <Image src={`/app/${shot}.png`} alt={alt} width={780} height={1688} priority={priority} />
      </span>
    </span>
  );
}
