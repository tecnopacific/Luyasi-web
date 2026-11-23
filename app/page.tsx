import Link from "next/link";

import { AbrazoMark, LEFT_ARC, RIGHT_ARC } from "@/components/Abrazo";
import { ArrowDoodle, DoorDoodle, NoAdsDoodle, PhoneDoodle, SwitchDoodle } from "@/components/Doodles";
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
    ask: "¿Eres sacerdote o terapeuta?",
    answer: "No. Te escucho y te acompaño, pero no reemplazo a quienes te quieren ni a un profesional.",
  },
  {
    ask: "¿Hablas en nombre de Dios?",
    answer: "No. Cada oración que escribo va marcada como escrita por Luyasi.",
  },
  {
    ask: "¿Me puedes curar?",
    answer: "No prometo milagros ni curaciones. Si estás en peligro, te muestro a quién llamar.",
  },
];

const yours = [
  { Doodle: PhoneDoodle, text: "Sin cuenta, tus conversaciones se quedan en tu teléfono." },
  { Doodle: SwitchDoodle, text: "El historial se guarda solo si tú lo activas." },
  { Doodle: NoAdsDoodle, text: "Nada de publicidad ni de entrenar IA con lo que cuentas." },
  { Doodle: DoorDoodle, text: "Borras tu cuenta desde la app cuando quieras." },
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
          <p>Se lo puedes preguntar.</p>
          <ArrowDoodle />
        </div>
        <div className="limits-chat">
          {limits.map((item) => (
            <div key={item.ask} className="limits-pair">
              <p className="bubble-you">{item.ask}</p>
              <p className="bubble-luyasi">
                <AbrazoMark size={22} />
                <span>{item.answer}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="yours" id="privacidad" aria-labelledby="yours-title">
        <div className="yours-head">
          <h2 id="yours-title">Lo que cuentas es tuyo</h2>
          <Link href="/privacidad" className="text-link">
            Leer la política de privacidad
          </Link>
        </div>
        <ul className="yours-list">
          {yours.map(({ Doodle, text }) => (
            <li key={text}>
              <Doodle />
              <p>{text}</p>
            </li>
          ))}
        </ul>
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
