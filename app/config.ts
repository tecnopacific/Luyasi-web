// Valores públicos centralizados. Los marcados como PENDIENTE deben
// confirmarse antes de publicar el sitio.
export const site = {
  name: "Luyasi",
  // PENDIENTE: el dominio aún no está registrado.
  domain: "https://luyasi.com",
  // PENDIENTE: buzones por crear en el dominio definitivo.
  supportEmail: "soporte@luyasi.com",
  privacyEmail: "privacidad@luyasi.com",
  // Luyasi es un producto de TecnoPacific, como Yukiia. Datos tomados de
  // tecnopacifc-web (nosotros y contacto). No se incluye un NIT sin verificar.
  operator: {
    name: "TecnoPacific",
    legalName: "TecnoPacific Ingeniería S.A.S.",
    website: "https://www.tecnopacific.com/",
    location: "Buenaventura, Valle del Cauca, Colombia",
    address:
      "Centro Comercial Bellavista, Cra. 47, Local 57, piso 1, Buenaventura, Valle del Cauca, Colombia",
  },
  legalUpdated: "2026-11-12",
  // Mientras sea true, las páginas legales lo dicen: el brief exige revisión
  // de un abogado antes del lanzamiento.
  legalReviewPending: true,
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
