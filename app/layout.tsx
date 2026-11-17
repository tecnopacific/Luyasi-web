import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "./config";
import "./globals.css";

// La misma familia que la app (SIL OFL 1.1). next/font la descarga al
// compilar y la sirve desde el propio sitio.
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-nunito",
});

const description =
  "Luyasi es un acompañante espiritual con IA que te escucha a cualquier hora, desde cualquier creencia o sin ninguna. En español, para iPhone y Android.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Luyasi: un espacio para escucharte",
    template: "%s | Luyasi",
  },
  description,
  applicationName: "Luyasi",
  openGraph: {
    type: "website",
    locale: "es_419",
    siteName: "Luyasi",
    title: "Luyasi: un espacio para escucharte",
    description,
    images: [{ url: "/brand/luyasi-symbol.png", width: 512, height: 512, alt: "Símbolo de Luyasi" }],
  },
  twitter: { card: "summary" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfbf6" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1118" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={nunito.variable}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
