## Why

Pauliello Car Detail solo tiene presencia en Instagram y no cuenta con un destino propio donde convertir esas visitas en consultas. Necesita una landing moderna, oscura y premium, mobile-first, cuyo único objetivo sea que el visitante entienda los servicios, confíe en la calidad y toque el botón de WhatsApp para pedir turno o consultar.

## What Changes

- Se crea una landing page de una sola vista (single page) en Angular v21 con secciones ancladas y navegación por scroll suave.
- Se agrega un shell de sitio: header sticky con navegación, gestión de metadatos SEO (title, description, keywords, lang `es-AR`), tema visual oscuro premium (paleta y tipografía) y estructura responsive mobile-first.
- Se centraliza la conversión por WhatsApp: una constante configurable con número placeholder y mensaje prearmado, reutilizada por todos los CTA, más un botón flotante sticky visible en mobile.
- Se construyen todas las secciones de contenido: hero, confianza, servicios, galería de trabajos (antes/después con placeholders reemplazables), proceso de reserva, sección de preparación para venta, FAQ, contacto y CTA final.
- Las imágenes usan placeholders elegantes con puntos de reemplazo claramente marcados; no se inventan dirección, teléfono ni horarios reales (se dejan como constantes/placeholders configurables).

## Capabilities

### New Capabilities
- `site-shell`: Estructura global de la landing — header sticky con navegación, scroll suave entre secciones, metadatos SEO, tema visual (paleta de colores, tipografía moderna, gradientes), layout responsive mobile-first y accesibilidad base (headings, foco, contraste, ARIA).
- `whatsapp-conversion`: Conversión por WhatsApp — constante configurable de número y mensaje, generación del enlace `wa.me`, reutilización en todos los CTA y botón flotante sticky en mobile.
- `landing-sections`: Contenido de la landing — secciones hero, confianza, servicios, galería de trabajos (antes/después con placeholders), proceso de reserva, preparación para venta, FAQ, contacto y CTA final, con su copy en español argentino.

### Modified Capabilities
<!-- Ninguna: el proyecto no tiene specs previas. -->

## Impact

- Código: nuevos componentes standalone bajo `src/app/` (componentes de sección y de UI compartida), un archivo de constantes de configuración (WhatsApp, Instagram, contenido), y actualización de `app.ts` / `app.html` / `app.routes.ts`.
- Estilos: `src/styles.css` (Tailwind v4) para tokens de tema (colores, fuente) y utilidades globales; `src/index.html` para metadatos base y fuente.
- Dependencias: ninguna nueva obligatoria (se usa Angular v21 + Tailwind v4 ya presentes); animaciones e iconos con CSS/SVG inline. SSR ya configurado se mantiene compatible.
- Datos: sin backend; todo el contenido es estático/configurable. No se exponen datos reales de contacto.
