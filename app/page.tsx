import Link from "next/link";

import { LEFT_ARC, RIGHT_ARC } from "@/components/Abrazo";
import { HelpLines } from "@/components/HelpLines";
import { Phone } from "@/components/Phone";
import { StoreLinks } from "@/components/StoreLinks";

const inside = [
  {
    shot: "chat",
    alt: "Pantalla de conversación: una persona cuenta que perdió a su abuela y Luyasi responde con calma.",
    title: "Conversa",
    text: "Te escucha y responde con calma, en pocas palabras. Por texto, o por voz si creas una cuenta.",
  },
  {
    shot: "reflexionar",
    alt: "Pantalla para pedir una oración o reflexión, con intención, enfoque y extensión.",
    title: "Pide una oración",
    text: "Escrita para tu momento, desde tu tradición o sin ninguna. Siempre marcada como creada por Luyasi.",
  },
  {
    shot: "biblioteca",
    alt: "Biblioteca con lecturas del cristianismo, judaísmo, islam, budismo e hinduismo.",
    title: "Lee textos sagrados",
    text: "De varias tradiciones, con su referencia y edición. Leerlos y escucharlos es gratis.",
  },
];

const limits = [
  {
    not: "No es sacerdote, pastor ni terapeuta.",
    instead: "Te acompaña y te escucha, pero no da dirección espiritual ni terapia.",
  },
  {
    not: "No habla en nombre de Dios.",
    instead: "Cada oración y reflexión va marcada como escrita por Luyasi.",
  },
  {
    not: "No promete milagros ni curaciones.",
    instead: "Tampoco te dice qué creer ni juzga lo que crees.",
  },
  {
    not: "No reemplaza a quienes te quieren ni a un profesional.",
    instead: "Si estás en peligro, deja la conversación a un lado y te muestra a quién llamar.",
  },
];

const yours = [
  { when: "Sin cuenta", what: "Tus conversaciones se quedan en tu teléfono. No las guardamos." },
  { when: "Con cuenta", what: "Tú eliges si guardar el historial, y lo borras cuando quieras." },
  { when: "Siempre", what: "Tus mensajes no se usan para publicidad ni para entrenar IA." },
  { when: "Si te vas", what: "Borras tu cuenta desde la app, y con ella lo que guardamos." },
];

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero">
        <div className="hero-copy">
          <h1>Un espacio para escucharte y acompañar tu camino espiritual</h1>
          <p className="hero-lede">
            Luyasi es un acompañante con inteligencia artificial que te escucha sin juzgarte, a cualquier hora. Tengas una
            fe, la estés buscando o no creas en nada.
          </p>
          <StoreLinks />
          <p className="hero-fine">Empiezas sin cuenta, con 5 mensajes gratis. Para mayores de 18 años.</p>
        </div>

        {/* El logo, con la app en el lugar de la luz. */}
        <div className="embrace">
          <svg viewBox="300 185 655 640" aria-hidden="true">
            <path className="arc arc-left" d={LEFT_ARC} />
            <path className="arc arc-right" d={RIGHT_ARC} />
          </svg>
          <Phone
            shot="bienvenida"
            alt="Pantalla de bienvenida de Luyasi: «Hola, soy Luyasi», el aviso de que es una IA y temas para empezar a conversar."
            priority
          />
        </div>
      </section>

      <section className="inside" id="como-funciona" aria-labelledby="inside-title">
        <h2 id="inside-title">Lo que encuentras dentro</h2>
        <ul className="inside-list">
          {inside.map((item) => (
            <li key={item.shot}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Phone shot={item.shot} alt={item.alt} />
            </li>
          ))}
        </ul>
      </section>

      <section className="limits" aria-labelledby="limits-title">
        <div className="limits-intro">
          <h2 id="limits-title">Lo que Luyasi no es</h2>
          <p>Es una inteligencia artificial que escucha. Por eso tiene claro dónde termina su papel.</p>
        </div>
        <ul className="limits-list">
          {limits.map((item) => (
            <li key={item.not}>
              <p className="limits-not">{item.not}</p>
              <p className="limits-instead">{item.instead}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="yours" id="privacidad" aria-labelledby="yours-title">
        <div className="yours-intro">
          <h2 id="yours-title">Lo que cuentas es tuyo</h2>
          <Link href="/privacidad" className="text-link">
            Leer la política de privacidad
          </Link>
        </div>
        <dl className="yours-list">
          {yours.map((item) => (
            <div key={item.when}>
              <dt>{item.when}</dt>
              <dd>{item.what}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="urgent" aria-labelledby="urgent-title">
        <div className="urgent-inner">
          <div>
            <h2 id="urgent-title">Si estás en peligro, llama ahora</h2>
            <p>Luyasi es una IA y no atiende emergencias. Estas líneas sí.</p>
          </div>
          <HelpLines compact />
        </div>
      </section>
    </main>
  );
}
