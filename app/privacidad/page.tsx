import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/app/config";
import { DocPage } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Qué datos trata Luyasi, para qué, con quién y cuánto tiempo, y cómo ejercer tus derechos.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacy() {
  const { operator, privacyEmail } = site;
  return (
    <DocPage
      path="/privacidad"
      title="Política de privacidad"
      summary="Hablar de tu fe o de cómo te sientes es íntimo. Aquí explicamos qué datos trata Luyasi, para qué, con quién y durante cuánto tiempo."
      updated={site.legalUpdated}
    >
      <h2>En pocas palabras</h2>
      <ul>
        <li>Puedes usar Luyasi sin cuenta. Como invitado, no guardamos el texto de tus conversaciones.</li>
        <li>
          Con cuenta, el historial es opcional: te lo preguntamos sin respuesta marcada, y puedes apagarlo y borrarlo
          cuando quieras.
        </li>
        <li>Tus mensajes solo se usan para responderte. No los vendemos, no hacemos publicidad con ellos y no se usan para entrenar modelos de IA.</li>
        <li>Puedes borrar tu cuenta y sus datos desde la app.</li>
      </ul>

      <h2 id="responsable">Quién es responsable</h2>
      <p>
        El responsable del tratamiento de tus datos es {operator.legalName}, con domicilio en {operator.address}. Para
        cualquier asunto de privacidad, escríbenos a <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
      </p>

      <h2 id="datos">Qué datos tratamos y para qué</h2>
      <div className="doc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Dato</th>
              <th scope="col">Cuándo</th>
              <th scope="col">Para qué</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Identificador de invitado y verificación del dispositivo (App Attest en iPhone, Play Integrity en Android)</td>
              <td>Al abrir la app por primera vez</td>
              <td>Crear tu sesión y dar los créditos de bienvenida una sola vez por dispositivo</td>
            </tr>
            <tr>
              <td>Correo electrónico, o el identificador que entregan Google o Apple</td>
              <td>Si creas una cuenta</td>
              <td>Identificarte y mantener tu saldo y tus preferencias</td>
            </tr>
            <tr>
              <td>Nombre o apodo</td>
              <td>Si decides darlo</td>
              <td>Llamarte como prefieras</td>
            </tr>
            <tr>
              <td>Preferencia espiritual</td>
              <td>Si decides indicarla</td>
              <td>Acompañarte desde tu tradición, o con lenguaje abierto</td>
            </tr>
            <tr>
              <td>País</td>
              <td>Cuando lo eliges</td>
              <td>Mostrarte las líneas de ayuda correctas</td>
            </tr>
            <tr>
              <td>Mensajes, intenciones de oración y preguntas sobre lecturas</td>
              <td>Cada vez que escribes o dictas</td>
              <td>Revisar si hay señales de riesgo y generar la respuesta. Solo se guardan si activas el historial</td>
            </tr>
            <tr>
              <td>Tu voz</td>
              <td>Si usas el micrófono (solo con cuenta)</td>
              <td>Convertirla en texto mientras hablas. El audio no se guarda</td>
            </tr>
            <tr>
              <td>Créditos, compras y suscripción</td>
              <td>Al usar créditos o comprar</td>
              <td>Llevar tu saldo y aplicar tus compras. No recibimos los datos de tu tarjeta</td>
            </tr>
            <tr>
              <td>Aviso de que hubo una situación de riesgo, sin su contenido</td>
              <td>Si la protección se activa</td>
              <td>Comprobar que la protección funciona</td>
            </tr>
            <tr>
              <td>Datos técnicos: dirección IP, tipo de dispositivo, errores</td>
              <td>Al conectarte</td>
              <td>Proteger el servicio contra abusos y corregir fallos. Los registros no incluyen el texto de tus mensajes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="sensibles">Datos sensibles y tu consentimiento</h2>
      <p>
        Tus creencias religiosas y lo que cuentas sobre tu salud emocional son datos sensibles según la ley colombiana
        (Ley 1581 de 2012) y la de muchos otros países. Por eso:
      </p>
      <ul>
        <li>Indicar tu preferencia espiritual, tu nombre o guardar el historial es siempre opcional. Puedes usar Luyasi sin hacerlo.</li>
        <li>Solo tratamos estos datos con tu autorización expresa, que das al aceptar esta política en la app, y puedes retirarla en cualquier momento.</li>
        <li>Están cifrados en nuestros servidores y no se usan para ningún otro fin.</li>
      </ul>
      <p>
        Si estás en la Unión Europea, la base para tratar estos datos es tu consentimiento explícito; para el resto (tu
        cuenta, tu saldo y tus compras), la ejecución del servicio que pides.
      </p>

      <h2 id="ia">Cómo funciona la inteligencia artificial</h2>
      <p>
        Las respuestas las genera un modelo de lenguaje que se ejecuta en Amazon Bedrock, el servicio de IA de Amazon Web
        Services, dentro de nuestra cuenta. Enviamos al modelo solo lo necesario: tus últimos mensajes de la conversación
        (hasta ocho), tu nombre y tu preferencia si los diste.
      </p>
      <ul>
        <li>El registro de peticiones del modelo está desactivado: Amazon no guarda tus mensajes.</li>
        <li>La empresa que creó el modelo no recibe tus textos.</li>
        <li>Ni nosotros ni nuestros proveedores usamos tus conversaciones para entrenar modelos de IA.</li>
      </ul>
      <p>
        Antes de responder, cada texto pasa por una revisión automática que busca señales de riesgo (ideas de suicidio,
        autolesión o violencia). Si las encuentra, Luyasi no genera una respuesta normal: te muestra líneas de ayuda de tu
        país. De ese momento solo queda constancia de que ocurrió y por qué función llegó, nunca de lo que escribiste.
        Ninguna persona lee tus mensajes para hacer esta revisión.
      </p>

      <h2 id="proveedores">Con quién compartimos datos</h2>
      <p>No vendemos ni alquilamos tus datos. Solo los compartimos con proveedores que nos ayudan a prestar el servicio y que los tratan siguiendo nuestras instrucciones:</p>
      <ul>
        <li>
          <strong>Amazon Web Services</strong>: alojamiento, base de datos, inicio de sesión (Amazon Cognito), IA (Amazon
          Bedrock), voz a texto (Amazon Transcribe), texto a voz (Amazon Polly) y correo (Amazon SES). Tenemos activada la exclusión que impide
          que Amazon use el contenido para mejorar sus servicios de IA.
        </li>
        <li>
          <strong>Apple y Google</strong>: verificación del dispositivo, inicio de sesión si eliges esas opciones y cobro de
          las compras dentro de la app.
        </li>
        <li>
          <strong>RevenueCat</strong>: validación de compras y suscripciones. Solo recibe tu identificador de usuario y los
          datos de la compra, nunca tus mensajes.
        </li>
      </ul>
      <p>También podríamos entregar datos si una autoridad competente lo exige conforme a la ley.</p>

      <h2 id="transferencias">Dónde se guardan</h2>
      <p>
        Nuestros servidores están en Amazon Web Services, en Estados Unidos (región de Virginia del Norte). Al usar Luyasi
        desde otro país, tus datos se transfieren allí. AWS aplica medidas de seguridad y contractuales para estas
        transferencias.
      </p>

      <h2 id="conservacion">Cuánto tiempo los guardamos</h2>
      <div className="doc-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Dato</th>
              <th scope="col">Plazo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sesión y créditos de invitado</td>
              <td>30 días si no creas una cuenta; después se borran sin posibilidad de recuperarlos</td>
            </tr>
            <tr>
              <td>Conversaciones con el historial activado</td>
              <td>Hasta que las borres, apagues el historial y elijas borrarlo, o borres tu cuenta</td>
            </tr>
            <tr>
              <td>Conversaciones con el historial apagado</td>
              <td>No se guardan en nuestros servidores</td>
            </tr>
            <tr>
              <td>Audio de las respuestas leídas en voz alta</td>
              <td>Sin historial, no se guarda. Con historial, alrededor de 1 a 2 días</td>
            </tr>
            <tr>
              <td>Audio que dictas</td>
              <td>No se guarda</td>
            </tr>
            <tr>
              <td>Correos que nos escribes a soporte o privacidad</td>
              <td>Se reenvían a nuestro buzón de atención; la copia en el servidor de correo se borra a los 7 días</td>
            </tr>
            <tr>
              <td>Registros técnicos</td>
              <td>30 días, sin texto de mensajes</td>
            </tr>
            <tr>
              <td>Copias de seguridad</td>
              <td>Lo borrado desaparece de ellas en 35 días como máximo</td>
            </tr>
            <tr>
              <td>Constancia de una cuenta borrada (solo el identificador y la fecha)</td>
              <td>90 días, para descartar avisos de compra que lleguen tarde</td>
            </tr>
            <tr>
              <td>Datos mínimos de compras</td>
              <td>El tiempo que exija la ley contable, sin mensajes ni preferencias</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="seguridad">Cómo los protegemos</h2>
      <p>
        Los datos viajan cifrados y se guardan cifrados. Los audios están en un almacenamiento privado al que solo se accede
        con enlaces que caducan a los 15 minutos. Las claves y secretos no están dentro de la app, y el acceso a los
        sistemas está limitado a las personas que los operan.
      </p>

      <h2 id="derechos">Tus derechos</h2>
      <p>Puedes, en cualquier momento:</p>
      <ul>
        <li>Conocer qué datos tuyos tratamos y pedir una copia.</li>
        <li>Actualizarlos o corregirlos.</li>
        <li>Pedir que los borremos y retirar tu autorización.</li>
        <li>Oponerte a un tratamiento o pedir que lo limitemos.</li>
        <li>Pedir prueba de la autorización que nos diste.</li>
      </ul>
      <p>
        Muchos de estos cambios los puedes hacer directamente en la app, en Mi espacio. Para lo demás, escribe a{" "}
        <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a> desde el correo de tu cuenta. En Colombia respondemos las
        consultas en un máximo de 10 días hábiles y los reclamos en 15 días hábiles.
      </p>
      <p>
        Si no quedas conforme, puedes acudir a la autoridad de protección de datos de tu país: en Colombia, la
        Superintendencia de Industria y Comercio; en España, la Agencia Española de Protección de Datos; en México, la
        autoridad que la ley designe.
      </p>

      <h2 id="edad">Edad mínima</h2>
      <p>
        Luyasi es solo para mayores de 18 años. Si sabemos que una persona menor de edad nos dio datos, los borramos.
      </p>

      <h2 id="borrado">Borrar tu cuenta</h2>
      <p>
        Puedes borrar tu cuenta desde la app o pedirlo por correo. Te explicamos qué se borra y qué se conserva en{" "}
        <Link href="/eliminar-cuenta">Eliminar cuenta</Link>.
      </p>

      <h2 id="cambios">Cambios en esta política</h2>
      <p>
        Si cambiamos algo importante, te avisaremos en la app antes de que se aplique. La fecha de arriba indica la última
        actualización.
      </p>
    </DocPage>
  );
}
