# Luyasi web

Sitio de Luyasi, la app de acompañamiento espiritual con IA. Next.js 16 con
exportación estática (`output: "export"`), sin servidor. Solo en español.

## Ejecutar y compilar

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # tipos
npm run build    # exporta a out/
```

## Publicar

En luyasi.com: S3 privado detrás de CloudFront, montado en la pila
`Luyasi-domain` del repo Luyasi-App (`infra/lib/domain-stack.ts`).

```bash
AWS_PROFILE=luyasi scripts/deploy.sh   # compila, sube y limpia la caché
```

## Rutas

- `/` — Inicio
- `/ayuda` — Líneas de emergencia y de crisis por país
- `/soporte` — Preguntas frecuentes y contacto
- `/privacidad` — Política de privacidad
- `/terminos` — Términos y condiciones
- `/eliminar-cuenta` — Canal web para pedir el borrado (lo exigen las tiendas)

## Pendiente

Todo está centralizado en `app/config.ts`:

- Enlaces de App Store y Google Play (`app/config.ts`): al añadirlos, las
  insignias pasan a enlazar a cada ficha.

Además:

- `lib/help-lines.json` es una copia de `backend/src/help/lines.json` del repo
  de la app. Mantenerlas iguales; los números están sin verificar.
- Los textos de `/ayuda` necesitan la aprobación del especialista en salud mental.
- La política describe la primera versión completa de la app (cuentas, voz y
  compras), según el brief. Si algo cambia en la app, cambia aquí.

## Diseño

- Paleta y tipografía de la app: ciruela, terracota, ámbar y crema; Nunito.
  Tokens en `app/globals.css`. El ámbar no se usa como texto sobre crema.
- El inicio es corto a propósito (unas tres pantallas): hero, tres pantallas
  de la app, dos listas breves y la ayuda urgente. No añadir secciones.
- El hero es el logo «Abrazo» con la app en el lugar del círculo de luz. La
  entrada de los arcos es la única animación automática.
- Las imágenes de `public/app/` son capturas reales de la app (390 × 844),
  generadas desde su código con una prueba de Flutter (`matchesGoldenFile`).
  Si la app cambia, se regeneran; no usar maquetas dibujadas.
- Sin líneas divisorias, tarjetas, sombras, degradados ni viñetas. La opción
  elegida o la página actual se marca con un subrayado terracota.
- Las insignias de App Store y Google Play son las oficiales en español
  (`public/stores/`) y se muestran siempre; sin enlace en `app/config.ts`, no
  llevan a ninguna parte.
- El pie de página repite los arcos del hero en el tono del fondo: el abrazo
  abre y cierra la página.
- No inventar testimonios, cifras ni reseñas.
