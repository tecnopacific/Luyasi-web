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

## Rutas

- `/` — Inicio
- `/ayuda` — Líneas de emergencia y de crisis por país
- `/soporte` — Preguntas frecuentes y contacto
- `/privacidad` — Política de privacidad
- `/terminos` — Términos y condiciones
- `/eliminar-cuenta` — Canal web para pedir el borrado (lo exigen las tiendas)

## Pendiente antes de publicar

Todo está centralizado en `app/config.ts`:

- Dominio y buzones (`soporte@`, `privacidad@`): el dominio aún no está registrado.
- Enlaces de App Store y Google Play: al añadirlos, aparecen los botones.
- `legalReviewPending`: ponerlo en `false` cuando un abogado apruebe la política
  y los términos. Mientras tanto, ambas páginas muestran un aviso.

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
- Sin líneas divisorias, tarjetas, sombras ni degradados. El punto ámbar marca
  la opción elegida o la página actual.
- No inventar testimonios, cifras ni reseñas.
