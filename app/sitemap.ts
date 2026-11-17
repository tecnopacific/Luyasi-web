import type { MetadataRoute } from "next";

import { site } from "./config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/ayuda", "/soporte", "/privacidad", "/terminos", "/eliminar-cuenta"].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: site.legalUpdated,
  }));
}
