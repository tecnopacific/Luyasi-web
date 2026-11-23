// Dibujos a mano para «Lo que cuentas es tuyo». Trazo redondeado y un poco
// irregular, como los arcos del logo; terracota para el trazo y ámbar para
// la luz. Decorativos: el texto de al lado dice lo mismo.

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" width="76" height="76" aria-hidden="true" className="doodle">
      {children}
    </svg>
  );
}

/** Un teléfono con un corazón: lo que cuentas se queda ahí. */
export function PhoneDoodle() {
  return (
    <Frame>
      <path {...stroke} d="M21 7.5C17.6 7.6 16.2 9.4 16.3 12.8L16.9 51.4C17 54.6 18.6 56.4 21.8 56.3L42.6 55.7C45.8 55.6 47.6 54 47.5 50.6L46.9 12.4C46.8 9.2 45.1 7.4 41.9 7.4Z" />
      <path {...stroke} d="M28.2 13.4C30.9 12.9 33.4 13 35.8 13.6" />
      <path d="M32 41.5C24.6 36.2 23.4 29.4 27.6 27.6C29.9 26.7 31.5 28.1 32.2 29.9C33.1 28 34.9 26.6 37.1 27.6C41 29.6 39.4 36.4 32 41.5Z" fill="var(--amber)" />
    </Frame>
  );
}

/** Un interruptor: el historial se guarda solo si lo enciendes. */
export function SwitchDoodle() {
  return (
    <Frame>
      <path {...stroke} d="M22.5 17.2C15.6 17.4 12.4 21.6 12.6 26.4C12.8 31.6 16.4 35 22.8 34.8L41.4 34.6C47.8 34.4 51.6 31 51.4 25.8C51.2 20.6 47.4 17 41.2 17.1Z" />
      <circle cx="41.6" cy="26" r="5.6" fill="var(--amber)" />
      <path {...stroke} d="M14.5 45.5C19.6 43.4 24.6 47.4 30.2 45.2C35.4 43.2 40.4 46.8 49.5 44.8" />
      <path {...stroke} d="M14.8 53.2C19 51.6 22.8 54.4 28.4 52.6" />
    </Frame>
  );
}

/** Un megáfono tachado: nada de publicidad. */
export function NoAdsDoodle() {
  return (
    <Frame>
      <path {...stroke} d="M13.6 27.4C13.4 31.4 13.5 35 13.9 38.4L22.4 38.1C28.6 41.6 34.4 45.2 40.6 48.6C41.4 37.6 41.3 27.4 40.4 16.8C34.4 20.6 28.4 24.2 22.2 27.4Z" />
      <path {...stroke} d="M20.6 39.2C21.2 43.6 22.6 47.4 24.8 51" />
      <path {...stroke} d="M47.2 26.8C49.4 29.6 49.6 33.2 47.6 36.4" />
      <path {...stroke} stroke="var(--plum-line)" d="M9.5 53.5C22 41.8 37.4 26.2 54.5 10.5" />
    </Frame>
  );
}

/** Una puerta abierta con luz: te vas cuando quieras y te llevas lo tuyo. */
export function DoorDoodle() {
  return (
    <Frame>
      <path {...stroke} d="M17.4 56.2L17 12.6C17 9.6 18.6 8 21.6 8L42.4 8.2C45.4 8.2 46.8 9.8 46.8 12.8L46.6 56" />
      <path d="M21.6 14.2L36.8 11.4L36.6 53.4L21.4 55.6Z" fill="var(--amber)" />
      <path {...stroke} d="M21.6 14.2L36.8 11.4L36.6 53.4L21.4 55.6Z" />
      <circle cx="33.4" cy="33.6" r="1.8" fill="currentColor" />
      <path {...stroke} d="M10.5 56.4C24 55.2 40 55.4 53.5 56.4" />
    </Frame>
  );
}

/** Flecha con un rizo, de «Se lo puedes preguntar» a la conversación. */
export function ArrowDoodle() {
  return (
    <svg viewBox="0 0 220 120" width="220" height="120" aria-hidden="true" className="doodle doodle-arrow">
      <path
        {...stroke}
        d="M8 18C30 70 70 96 112 88C140 82 150 58 132 50C114 43 104 70 128 84C150 97 180 92 206 70"
      />
      <path {...stroke} d="M188 66C195 67.5 201 69 206 70C204 75.6 201.8 81 199 86" />
    </svg>
  );
}
