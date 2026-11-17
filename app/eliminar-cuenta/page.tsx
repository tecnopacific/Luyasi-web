import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/app/config";
import { DocPage } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Eliminar cuenta",
  description: "Cómo borrar tu cuenta de Luyasi y qué datos se eliminan.",
  alternates: { canonical: "/eliminar-cuenta" },
};

export default function DeleteAccount() {
  const mailto = `mailto:${site.privacyEmail}?subject=${encodeURIComponent("Eliminar mi cuenta de Luyasi")}&body=${encodeURIComponent(
    "Quiero eliminar mi cuenta de Luyasi y sus datos.\n\nCorreo de la cuenta: \nInicio de sesión con (correo, Google o Apple): ",
  )}`;
  return (
    <DocPage
      path="/eliminar-cuenta"
      title="Eliminar tu cuenta"
      summary="Puedes borrar tu cuenta de Luyasi y sus datos cuando quieras, desde la app o por correo."
      updated={site.legalUpdated}
    >
      <div className="doc-note">
        <p>
          <strong>Si tienes Luyasi Plus, cancélalo primero</strong> en App Store o Google Play. Borrar la cuenta no detiene
          los cobros de la tienda, y la app no puede cancelarlos por ti.
        </p>
      </div>

      <h2 id="app">Desde la app</h2>
      <ol>
        <li>Abre Luyasi e inicia sesión con la cuenta que quieres borrar.</li>
        <li>Ve a Mi espacio y entra en tu cuenta.</li>
        <li>Toca «Borrar cuenta» y confirma.</li>
      </ol>
      <p>Te avisaremos cuando el borrado termine.</p>

      <h2 id="correo">Por correo, si no puedes entrar a la app</h2>
      <p>
        Escribe a <a href={mailto}>{site.privacyEmail}</a> desde el correo de tu cuenta, o indica con qué la creaste
        (correo, Google o Apple). Podemos pedirte que confirmes que eres tú antes de borrarla.
      </p>
      <p style={{ margin: "20px 0 8px" }}>
        <a className="button" href={mailto}>
          Pedir el borrado por correo
        </a>
      </p>

      <h2 id="que-se-borra">Qué se borra</h2>
      <ul>
        <li>Tu perfil, nombre, país y preferencias.</li>
        <li>Todas tus conversaciones guardadas y sus audios, de inmediato.</li>
        <li>Tu saldo de créditos, incluidos los comprados que no hayas usado. No se pueden recuperar.</li>
        <li>Tu usuario de inicio de sesión y tu registro en el sistema de compras.</li>
      </ul>

      <h2 id="que-se-conserva">Qué se conserva, y por cuánto</h2>
      <ul>
        <li>Los datos mínimos de tus compras que exija la ley contable, sin mensajes ni preferencias.</li>
        <li>Una constancia sin datos personales (el identificador borrado y la fecha) durante 90 días, para descartar avisos de compra que lleguen tarde.</li>
        <li>Las copias de seguridad se renuevan solas: lo borrado desaparece de ellas en 35 días como máximo.</li>
      </ul>
      <p>
        Si usaste Luyasi solo como invitado, no hay cuenta que borrar: tu sesión y sus créditos se eliminan solos a los 30
        días, y puedes borrar la conversación del teléfono desinstalando la app. Más detalles en la{" "}
        <Link href="/privacidad#conservacion">política de privacidad</Link>.
      </p>
    </DocPage>
  );
}
