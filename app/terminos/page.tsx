import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/app/config";
import { DocPage } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Las condiciones para usar Luyasi: qué es, qué no es, créditos, compras y responsabilidades.",
  alternates: { canonical: "/terminos" },
};

export default function Terms() {
  const { operator, supportEmail } = site;
  return (
    <DocPage
      path="/terminos"
      title="Términos y condiciones"
      summary="Las reglas para usar Luyasi, escritas para que se entiendan. Al usar la app, las aceptas."
      updated={site.legalUpdated}
    >
      <h2 id="servicio">Quién presta el servicio</h2>
      <p>
        Luyasi es una app de {operator.legalName}, con domicilio en {operator.address}. En estos términos, «nosotros» se
        refiere a esa empresa y «tú», a quien usa la app.
      </p>

      <h2 id="que-es">Qué es Luyasi</h2>
      <p>
        Luyasi es un acompañante espiritual virtual que funciona con inteligencia artificial. Te escucha, conversa
        contigo y puede crear oraciones y reflexiones o explicar lecturas de textos sagrados.
      </p>
      <div className="doc-note">
        <p>
          <strong>Luyasi no es una persona.</strong> No es sacerdote, pastor, guía religioso, terapeuta ni profesional de
          la salud, y no habla en nombre de Dios ni de ninguna tradición. No ofrece confesión, sacramentos ni absolución,
          y no reemplaza la terapia, la atención médica ni la ayuda profesional.
        </p>
      </div>

      <h2 id="emergencias">En una emergencia</h2>
      <p>
        Luyasi no es un servicio de emergencias y no incluye conversación con una persona. Si tu vida o la de alguien
        está en peligro, llama a los servicios de emergencia de tu país o consulta las{" "}
        <Link href="/ayuda">líneas de ayuda</Link>. Cuando la app detecta señales de riesgo, te muestra esas líneas sin
        costo, pero esa detección es automática y puede fallar: no dependas de ella.
      </p>

      <h2 id="edad">Edad</h2>
      <p>Debes tener al menos 18 años para usar Luyasi.</p>

      <h2 id="cuenta">Invitado y cuenta</h2>
      <ul>
        <li>Puedes empezar como invitado, sin cuenta. La sesión de invitado y sus créditos caducan a los 30 días si no creas una cuenta.</li>
        <li>Para guardar historial, usar la voz o comprar, necesitas una cuenta con correo, Google o Apple.</li>
        <li>Eres responsable de mantener seguro el acceso a tu cuenta.</li>
        <li>Puedes borrar tu cuenta cuando quieras desde la app. Ver <Link href="/eliminar-cuenta">Eliminar cuenta</Link>.</li>
      </ul>

      <h2 id="creditos">Créditos</h2>
      <p>Luyasi funciona con créditos. Antes de cada acción que los consume, la app te lo indica.</p>
      <ul>
        <li>Cuesta 1 crédito: cada mensaje, cada oración o reflexión creada y cada explicación de una lectura.</li>
        <li>
          Es gratis: la respuesta cuando hay señales de riesgo, la sección de ayuda, leer y escuchar la biblioteca y volver
          a escuchar una respuesta ya generada.
        </li>
        <li>Como invitado recibes 5 créditos, una sola vez por dispositivo. Al crear tu cuenta recibes 20 más y conservas los de invitado que no usaste.</li>
        <li>Los créditos gratis de la cuenta y los de paquetes comprados no vencen. Los del plan mensual se renuevan cada mes y los no usados no se acumulan.</li>
        <li>Si una respuesta falla por un error nuestro, el crédito se te devuelve.</li>
        <li>Los créditos no son dinero, no se pueden canjear por efectivo ni transferir a otra persona.</li>
      </ul>

      <h2 id="compras">Suscripción y compras</h2>
      <ul>
        <li>
          Luyasi Plus (mensual o anual) y los paquetes de créditos se compran dentro de la app con el sistema de pago de
          Apple o de Google, y se rigen también por sus condiciones.
        </li>
        <li>Antes de pagar verás el precio, el periodo, cómo se renueva y cómo cancelar.</li>
        <li>
          La suscripción se renueva automáticamente hasta que la canceles desde los ajustes de tu cuenta de App Store o de
          Google Play. Al cancelar, conservas el plan hasta el final del periodo pagado.
        </li>
        <li>Borrar tu cuenta de Luyasi no cancela la suscripción: debes cancelarla en la tienda.</li>
        <li>
          Los reembolsos los gestionan Apple o Google según sus políticas. Si te reembolsan un paquete, se retiran los
          créditos que aún queden de ese paquete.
        </li>
      </ul>

      <h2 id="contenido">Lo que genera Luyasi</h2>
      <ul>
        <li>Las respuestas, oraciones y reflexiones se generan con IA y pueden contener errores. Úsalas con tu propio criterio.</li>
        <li>Las oraciones y reflexiones siempre llevan la etiqueta «creada por Luyasi»: no son textos tradicionales ni oficiales de ninguna religión.</li>
        <li>
          Los textos de la biblioteca proceden de ediciones verificadas, indicadas en cada lectura. Luyasi no debe citar
          textos sagrados fuera de ese catálogo; si lo hace, no tomes la cita como exacta.
        </li>
        <li>Puedes usar lo que Luyasi crea para ti con fines personales.</li>
      </ul>

      <h2 id="uso">Uso aceptable</h2>
      <p>Al usar Luyasi, te comprometes a no:</p>
      <ul>
        <li>Usarla para hacer daño a otras personas o para planear actos ilegales.</li>
        <li>Intentar saltarte los límites de créditos, la verificación del dispositivo o las protecciones del servicio.</li>
        <li>Acceder de forma automatizada, copiar el servicio o intentar obtener sus instrucciones internas.</li>
        <li>Hacerte pasar por otra persona o presentar lo que genera Luyasi como palabra de una autoridad religiosa.</li>
      </ul>
      <p>Podemos suspender una cuenta o un dispositivo que incumpla estas reglas.</p>

      <h2 id="propiedad">Propiedad intelectual</h2>
      <p>
        La app, la marca Luyasi, su logo y su diseño nos pertenecen. Los textos de la biblioteca pertenecen a sus
        titulares y se muestran según su licencia o porque son de dominio público.
      </p>

      <h2 id="disponibilidad">Disponibilidad y cambios</h2>
      <p>
        Hacemos lo posible para que Luyasi esté disponible siempre, pero puede haber interrupciones. Podemos mejorar,
        cambiar o retirar funciones. Si un cambio afecta lo que pagaste, te avisaremos con antelación.
      </p>

      <h2 id="responsabilidad">Responsabilidad</h2>
      <p>
        Luyasi es un acompañamiento, no un consejo profesional. En la medida en que la ley lo permita, no respondemos por
        decisiones que tomes basándote en sus respuestas. Nada en estos términos limita los derechos que te da la ley de
        protección al consumidor de tu país.
      </p>

      <h2 id="ley">Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de Colombia, sin perjuicio de las normas de protección al consumidor que te
        correspondan en tu país de residencia.
      </p>

      <h2 id="cambios">Cambios en estos términos</h2>
      <p>
        Si cambiamos algo importante, te avisaremos en la app antes de que se aplique. Si no estás de acuerdo, puedes
        dejar de usar Luyasi y borrar tu cuenta.
      </p>

      <h2 id="contacto">Contacto</h2>
      <p>
        Escríbenos a <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. La forma en que tratamos tus datos está en la{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </DocPage>
  );
}
