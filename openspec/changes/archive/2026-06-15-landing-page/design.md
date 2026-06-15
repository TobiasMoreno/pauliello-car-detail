## Context

El proyecto es una app Angular v21 standalone con SSR (`@angular/ssr`, Express) y Tailwind CSS v4 ya configurado (`@import "tailwindcss"` en `src/styles.css`). No hay specs previas ni componentes de negocio: solo el `App` raíz generado. La landing es de una sola página, sin backend, con foco en conversión a WhatsApp desde tráfico de Instagram. CLAUDE.md exige componentes standalone, signals, `inject()`, `ChangeDetectionStrategy.OnPush`, `input()`/`output()`, control flow nativo (`@if`/`@for`), bindings `class`/`style` (no `ngClass`/`ngStyle`), `NgOptimizedImage` para imágenes estáticas, y accesibilidad WCAG AA / AXE.

## Goals / Non-Goals

**Goals:**
- Landing single-page, oscura, premium y mobile-first que lleve a consultar por WhatsApp.
- Conversión WhatsApp centralizada en una sola constante configurable (número + mensaje) reutilizada por todos los CTA y por el botón flotante.
- Contenido en español argentino, sin datos de contacto inventados.
- Estructura de galería e imágenes con placeholders claramente reemplazables.
- Accesibilidad base (AXE/WCAG AA), SEO básico y scroll suave.

**Non-Goals:**
- No hay backend, formularios enviados a servidor, CMS ni i18n multi-idioma.
- No se integran imágenes reales del Instagram en este cambio (solo placeholders).
- No se agregan librerías de animación (Framer Motion no aplica en Angular); animaciones con CSS + IntersectionObserver.
- No se inventan dirección, teléfono ni horarios.

## Decisions

- **Single page con secciones ancladas** en lugar de rutas múltiples. La navegación usa anclas (`#servicios`, etc.) y scroll suave vía CSS `scroll-behavior: smooth` + `scroll-margin-top` para compensar el header sticky. Razón: una landing de conversión no necesita router; reduce complejidad y mejora el flujo de lectura. Alternativa descartada: lazy routes (overkill para una vista).
- **Un componente standalone por sección** (`HeaderComponent`, `HeroComponent`, `TrustComponent`, `ServicesComponent`, `GalleryComponent`, `ProcessComponent`, `SaleComponent`, `FaqComponent`, `ContactComponent`, `FinalCtaComponent`, `WhatsappFabComponent`, `FooterComponent`) más componentes UI reutilizables (`WhatsappButtonComponent`). `App` los compone. Razón: componentes pequeños y enfocados según CLAUDE.md. Plantillas inline para componentes chicos; externas cuando el markup es extenso (galería, servicios).
- **Configuración centralizada** en `src/app/config/site.config.ts`: constante `WHATSAPP_NUMBER` (placeholder `549XXXXXXXXXX`), `WHATSAPP_DEFAULT_MESSAGE`, helper `buildWhatsappUrl(message?)` que arma `https://wa.me/<num>?text=<encoded>`, `INSTAGRAM_URL`, y placeholders de contacto (`CONTACT_ADDRESS`, `CONTACT_HOURS` marcados como reemplazables). Razón: un único punto de cambio para el número real. Alternativa descartada: hardcodear el link en cada CTA.
- **Contenido como datos tipados** (arrays de servicios, pasos del proceso, FAQ, ítems de galería) en `site.config.ts` o archivos de datos, renderizados con `@for`. Razón: evita duplicar markup y facilita editar copy.
- **Tema con tokens Tailwind v4** definidos en `@theme` dentro de `src/styles.css`: colores `carbon #0B0B0B`, `dark #171717`, `gold #D6A84F`, `light #D4D4D4`, `navy #0F172A`. Tipografía moderna (Inter o similar) cargada en `index.html`. Razón: Tailwind v4 usa `@theme` para custom tokens; mantiene consistencia.
- **Animaciones al scroll** con una directiva standalone `RevealOnScrollDirective` basada en `IntersectionObserver` que agrega una clase al entrar en viewport, con guard para SSR (`isPlatformBrowser`) y respeto a `prefers-reduced-motion`. Razón: sin dependencias y accesible.
- **Imágenes placeholder**: contenedores con gradiente/aspect-ratio y un comentario `<!-- REEMPLAZAR: ... -->` + atributo claro. Cuando se usen imágenes estáticas reales se migrará a `NgOptimizedImage`; los placeholders no son base64 inline obligatorio.
- **Galería antes/después**: grid responsive con etiquetas (Interior, Exterior, Pulido, Preparación para venta) y modal accesible (foco atrapado, `Esc` cierra, `role="dialog"`/`aria-modal`). Implementado con signals para el estado del modal.

## Risks / Trade-offs

- **SSR + IntersectionObserver/`document`** → guardas con `isPlatformBrowser(inject(PLATFORM_ID))`; nunca tocar `window`/`document` en init de servidor.
- **Contraste del dorado `#D6A84F` sobre oscuro** puede fallar AA para texto pequeño → usarlo en texto grande/acentos o sobre fondos suficientemente oscuros; texto de cuerpo en blanco/gris claro. Verificar con AXE.
- **Header sticky tapando anclas** → `scroll-margin-top` en cada sección igual a la altura del header.
- **Placeholder de número de WhatsApp** podría quedar en producción → documentar claramente en config y README qué reemplazar.
- **Modal de galería y foco** → riesgo de trampas de accesibilidad; mitigar con manejo explícito de foco y pruebas con teclado.

## Migration Plan

No aplica migración de datos. Despliegue estándar (`ng build`). Rollback = revertir el commit del cambio. Antes de publicar: reemplazar `WHATSAPP_NUMBER` por el número real y, opcionalmente, las imágenes placeholder por trabajos reales.

## Open Questions

- Número real de WhatsApp, handle/url exacta de Instagram, y si habrá dirección/horarios visibles (por ahora placeholders).
- Fuente tipográfica definitiva (Inter por defecto salvo indicación).
