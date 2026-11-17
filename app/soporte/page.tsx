import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/app/config";
import { DocPage } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Soporte",
  description: "Preguntas frecuentes sobre Luyasi y cómo contactarnos.",
  alternates: { canonical: "/soporte" },
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "¿Luyasi es una persona?",
    a: (
      <p>
        No. Es una inteligencia artificial, y siempre lo dice. Bajo su nombre verás «Acompañante virtual con IA». Esta
        versión no incluye conversación con una persona.
      </p>
    ),
  },
  {
    q: "¿Tengo que tener una religión para usarla?",
    a: (
      <p>
        No. Luyasi acompaña a cualquier persona, con o sin creencia. Indicar tu preferencia espiritual es opcional y
        puedes cambiarla cuando quieras en Mi espacio, sin perder tu historial.
      </p>
    ),
  },
  {
    q: "¿Qué tradiciones conoce?",
    a: (
      <>
        <p>
          Hay contenido revisado por personas de cada tradición para el cristianismo católico y evangélico, el judaísmo,
          el islam, el budismo, el hinduismo y la espiritualidad sin religión.
        </p>
        <p>Si la tuya no está, Luyasi te acompaña con lenguaje abierto y te dice que aún no tiene lecturas verificadas de ella.</p>
      </>
    ),
  },
  {
    q: "¿Cómo funcionan los créditos?",
    a: (
      <>
        <p>
          Cada mensaje, oración o explicación de una lectura cuesta 1 crédito. Empiezas con 5 sin cuenta y recibes 20 más
          al crearla. Leer y escuchar la biblioteca, la ayuda y las respuestas en una situación de riesgo son siempre
          gratis.
        </p>
        <p>
          Si una respuesta falla, el crédito vuelve a tu saldo. Los detalles están en los{" "}
          <Link href="/terminos#creditos">términos</Link>.
        </p>
      </>
    ),
  },
  {
    q: "¿Quién puede leer lo que escribo?",
    a: (
      <p>
        Tus mensajes solo se usan para responderte. Sin historial, no se guardan en nuestros servidores. Con historial,
        se guardan cifrados para que puedas retomarlos, hasta que los borres. Más en la{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
    ),
  },
  {
    q: "Luyasi me mostró líneas de ayuda en lugar de responder",
    a: (
      <>
        <p>
          Cuando detecta en un mensaje señales de que alguien puede estar en peligro, Luyasi muestra las líneas de ayuda
          de tu país en lugar de una respuesta normal. No se cobra ningún crédito.
        </p>
        <p>
          Si fue un error, puedes seguir escribiendo con otras palabras. Si no lo fue, por favor llama: hay personas
          preparadas para escucharte ahora.
        </p>
      </>
    ),
  },
  {
    q: "¿Cómo cancelo la suscripción?",
    a: (
      <p>
        Desde los ajustes de tu cuenta de App Store o de Google Play, en Suscripciones. La app no puede cancelarla por ti.
        Conservas el plan hasta el final del periodo pagado.
      </p>
    ),
  },
  {
    q: "Compré créditos y no aparecen",
    a: (
      <p>
        Cierra y vuelve a abrir la app con la misma cuenta. Si siguen sin aparecer después de unos minutos, escríbenos
        con la fecha de la compra y el correo de tu cuenta. No envíes datos de tu tarjeta.
      </p>
    ),
  },
  {
    q: "¿Cómo borro mi cuenta?",
    a: (
      <p>
        Desde la app, en Mi espacio. También puedes pedirlo por correo. Ver <Link href="/eliminar-cuenta">Eliminar cuenta</Link>.
      </p>
    ),
  },
];

export default function Support() {
  return (
    <DocPage
      path="/soporte"
      title="Soporte"
      summary="Respuestas a las dudas más comunes. Si no encuentras la tuya, escríbenos."
    >
      <h2>Preguntas frecuentes</h2>
      <dl className="faq">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt>{f.q}</dt>
            <dd>{f.a}</dd>
          </div>
        ))}
      </dl>

      <div className="contact-box">
        <h2>Escríbenos</h2>
        <p>
          Respondemos por correo, normalmente en uno o dos días hábiles. Cuéntanos qué pasó y desde qué teléfono, sin
          incluir el contenido de tus conversaciones.
        </p>
        <p>
          <a className="button" href={`mailto:${site.supportEmail}?subject=Soporte%20Luyasi`}>
            Escribir a {site.supportEmail}
          </a>
        </p>
        <p>
          Este correo no atiende emergencias. Si estás en peligro, ve a <Link href="/ayuda">Ayuda inmediata</Link>.
        </p>
      </div>
    </DocPage>
  );
}
