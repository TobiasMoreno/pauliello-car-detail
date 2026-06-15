## 1. Configuración y tema

- [x] 1.1 Crear `src/app/config/site.config.ts` con `WHATSAPP_NUMBER` (placeholder `549XXXXXXXXXX`), `WHATSAPP_DEFAULT_MESSAGE`, helper `buildWhatsappUrl(message?)`, `INSTAGRAM_URL` y placeholders `CONTACT_ADDRESS`/`CONTACT_HOURS`
- [x] 1.2 Crear estructuras de datos tipadas para servicios, pasos del proceso, ítems de FAQ y ítems de galería (en config o `src/app/data/`)
- [x] 1.3 Definir tokens de tema en `src/styles.css` con `@theme` (carbon `#0B0B0B`, dark `#171717`, gold `#D6A84F`, light `#D4D4D4`, navy `#0F172A`) y `scroll-behavior: smooth` + soporte `prefers-reduced-motion`
- [x] 1.4 Cargar tipografía moderna (Inter) y actualizar `src/index.html` con `lang="es-AR"`, fuente y favicon

## 2. SEO y app raíz

- [x] 2.1 Configurar metadatos SEO (title, meta description, keywords) vía `Title`/`Meta` o `index.html`
- [x] 2.2 Actualizar `app.ts`/`app.html` para componer la landing (sin router multi-página) y mantener compatibilidad SSR
- [x] 2.3 Crear `RevealOnScrollDirective` standalone con `IntersectionObserver`, guarda `isPlatformBrowser` y respeto a `prefers-reduced-motion`

## 3. Conversión WhatsApp

- [x] 3.1 Crear `WhatsappButtonComponent` reutilizable (input de mensaje y label, abre `wa.me` en pestaña nueva con `rel="noopener"` y nombre accesible)
- [x] 3.2 Crear `WhatsappFabComponent` (botón flotante sticky visible en mobile, `aria-label`, área táctil adecuada)

## 4. Shell del sitio

- [x] 4.1 Crear `HeaderComponent` sticky con marca, navegación (Inicio, Servicios, Trabajos, Proceso, Contacto), botón "Reservar turno" y menú accesible en mobile (`aria-expanded`, foco gestionado)
- [x] 4.2 Aplicar `scroll-margin-top` a las secciones para compensar el header sticky
- [x] 4.3 Crear `FooterComponent` con enlaces y nota de marca

## 5. Secciones de contenido

- [x] 5.1 `HeroComponent`: `<h1>`, subtítulo, CTA principal a WhatsApp, CTA secundario a galería y mini cards flotantes
- [x] 5.2 `TrustComponent`: título, texto y puntos destacados
- [x] 5.3 `ServicesComponent`: título, descripción y 6 cards generadas por `@for` con íconos lineales y hover
- [x] 5.4 `GalleryComponent`: grid responsive con etiquetas, placeholders reemplazables (con comentarios de reemplazo) y modal accesible (`role="dialog"`, `aria-modal`, foco atrapado, `Esc`)
- [x] 5.5 `ProcessComponent`: 5 pasos numerados con descripciones
- [x] 5.6 `SaleComponent`: título "¿Vas a vender tu auto?", beneficios y CTA con mensaje contextual de venta
- [x] 5.7 `FaqComponent`: 5 preguntas/respuestas con disclosure accesible (`aria-expanded`)
- [x] 5.8 `ContactComponent`: texto, botón WhatsApp, enlace Instagram y placeholders de ubicación/horarios (sin datos inventados)
- [x] 5.9 `FinalCtaComponent`: título, texto y CTA final a WhatsApp

## 6. Verificación

- [x] 6.1 Aplicar `RevealOnScrollDirective` a las secciones para animación de entrada suave
- [x] 6.2 Verificar build (`ng build`) y render SSR sin errores
- [x] 6.3 Verificar responsive mobile-first, scroll suave y botón flotante en mobile
- [x] 6.4 Verificar accesibilidad (AXE/WCAG AA): contraste, jerarquía de headings (un solo `<h1>`), foco visible y navegación por teclado
- [x] 6.5 Confirmar que todos los CTA usan la constante de WhatsApp y que no hay datos de contacto inventados
- [x] 6.6 Documentar en README qué placeholders reemplazar (número de WhatsApp, Instagram, imágenes, ubicación/horarios)
