# PaulielloCarDetail

Landing page de conversión (single page) para Pauliello Car Detail — estética vehicular y detailing. Angular v21 standalone + SSR + Tailwind v4. El objetivo es convertir tráfico de Instagram en consultas por WhatsApp.

## ⚠️ Placeholders a reemplazar antes de publicar

Toda la configuración editable vive en `src/app/config/site.config.ts`:

| Constante | Qué reemplazar |
| --- | --- |
| `WHATSAPP_NUMBER` | Número real en formato internacional sin signos (ej. `5491122334455`). El valor por defecto `549XXXXXXXXXX` es un placeholder y **no debe quedar en producción**. Todos los CTA usan este número vía `buildWhatsappUrl()`. |
| `WHATSAPP_DEFAULT_MESSAGE` | Mensaje prearmado por defecto del enlace `wa.me`, si querés ajustarlo. |
| `INSTAGRAM_URL` | Ya apunta a `https://www.instagram.com/pauliello_cardetail/`; verificá que siga vigente. |
| `CONTACT_ADDRESS` | Dirección/ubicación real. Por defecto es un placeholder; **no se inventan datos**. |
| `CONTACT_HOURS` | Horarios de atención reales. Por defecto es un placeholder. |

### Imágenes de la galería

Las fotos de trabajos son placeholders visuales (gradientes). Para cargar las reales:

1. Editá `GALLERY_ITEMS` en `src/app/data/landing.data.ts` y completá el campo `imageSrc` de cada ítem con la ruta de la foto.
2. En `src/app/sections/gallery.component.ts`, reemplazá los bloques marcados con `<!-- REEMPLAZAR: ... -->` por `<img ngSrc="...">` usando `NgOptimizedImage` (importar la directiva en el componente).

### Otros datos editables

El copy de servicios, proceso, FAQ, navegación y destacados está centralizado en `src/app/data/landing.data.ts`.

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
