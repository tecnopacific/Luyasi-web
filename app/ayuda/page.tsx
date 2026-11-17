import type { Metadata } from "next";

import { DocPage } from "@/components/DocPage";
import { HelpLines } from "@/components/HelpLines";

export const metadata: Metadata = {
  title: "Ayuda inmediata",
  description: "Líneas de emergencia y de apoyo en crisis en Colombia, México, España, Argentina, Chile y Estados Unidos.",
  alternates: { canonical: "/ayuda" },
};

// PENDIENTE: los textos de apoyo de esta página forman parte del protocolo de
// protección y requieren la aprobación del especialista en salud mental.
export default function Help() {
  return (
    <DocPage
      path="/ayuda"
      title="Si estás en peligro, pide ayuda ahora"
      summary="Si tú o alguien más corre peligro, llama a emergencias o a una línea de apoyo de tu país. Luyasi es una IA y no sustituye la atención médica, psicológica ni de emergencias."
    >
      <HelpLines />
      <h2 style={{ marginTop: 48 }}>Mientras tanto</h2>
      <ul>
        <li>Si puedes, busca a una persona de confianza y dile cómo estás.</li>
        <li>Si hay peligro inmediato, ve al servicio de urgencias más cercano.</li>
        <li>Si llamas por otra persona, quédate con ella hasta que llegue la ayuda.</li>
      </ul>
    </DocPage>
  );
}
