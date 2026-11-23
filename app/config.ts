// Valores públicos centralizados.
export const site = {
  name: "Luyasi",
  // Registrado en Route 53 el 2026-11-23.
  domain: "https://luyasi.com",
  // Reciben en SES y se reenvían al equipo (Luyasi-App: docs/correo.md).
  supportEmail: "soporte@luyasi.com",
  privacyEmail: "privacidad@luyasi.com",
  // Luyasi es un producto de TecnoPacific, como Yukiia. Datos tomados de
  // tecnopacifc-web (nosotros y contacto). Como en Yukiia: la sede (ciudad),
  // sin dirección de la calle ni un NIT sin verificar.
  operator: {
    name: "TecnoPacific",
    legalName: "TecnoPacific Ingeniería S.A.S.",
    website: "https://www.tecnopacific.com/",
    location: "Buenaventura, Valle del Cauca, Colombia",
  },
  legalUpdated: "2026-11-23",
  appStoreUrl: "",
  playStoreUrl: "",
} as const;

export const nav = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#privacidad", label: "Privacidad" },
  { href: "/soporte", label: "Soporte" },
] as const;

export const legalLinks = [
  { href: "/ayuda", label: "Ayuda inmediata" },
  { href: "/soporte", label: "Soporte" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
  { href: "/eliminar-cuenta", label: "Eliminar cuenta" },
] as const;
