import Link from "next/link";

import { AbrazoMark } from "@/components/Abrazo";

export default function NotFound() {
  return (
    <main id="contenido" className="not-found">
      <div>
        <AbrazoMark size={96} />
        <h1>Esta página no existe</h1>
        <p>Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <Link href="/" className="text-link">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
