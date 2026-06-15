# site-shell

## Purpose

Definir el armazón del sitio de Pauliello Car Detail: header sticky con navegación responsive, scroll suave entre secciones, metadatos SEO, tema visual premium oscuro y compatibilidad con renderizado del lado del servidor (SSR).

## Requirements

### Requirement: Header sticky con navegación

El sitio SHALL mostrar un header fijo (sticky) en la parte superior con la marca "Pauliello Car Detail", enlaces de navegación (Inicio, Servicios, Trabajos, Proceso, Contacto) y un botón destacado "Reservar turno" que lleva a WhatsApp.

#### Scenario: Header permanece visible al hacer scroll
- **WHEN** el usuario desplaza la página hacia abajo
- **THEN** el header permanece visible y anclado al borde superior de la ventana

#### Scenario: Navegación lleva a la sección correspondiente
- **WHEN** el usuario hace clic en un enlace de navegación
- **THEN** la página se desplaza hasta la sección anclada correspondiente, sin que el header sticky tape el título de la sección

#### Scenario: Navegación accesible por teclado
- **WHEN** el usuario tabula por el header
- **THEN** cada enlace y el botón reciben foco visible y son activables con Enter/Espacio

### Requirement: Navegación responsive mobile-first

El header SHALL adaptarse a pantallas chicas ofreciendo una navegación utilizable en mobile (menú accesible) y mantener visible el acceso a WhatsApp.

#### Scenario: Menú en mobile
- **WHEN** el ancho de pantalla es de mobile
- **THEN** la navegación se muestra mediante un control de menú accesible (con `aria-expanded` y foco gestionado) y el acceso a "Reservar turno" sigue disponible

#### Scenario: Layout en desktop
- **WHEN** el ancho de pantalla es de escritorio
- **THEN** los enlaces de navegación se muestran en línea en el header

### Requirement: Scroll suave entre secciones

El sitio SHALL aplicar desplazamiento suave al navegar entre anclas internas y respetar la preferencia de movimiento reducido del usuario.

#### Scenario: Desplazamiento suave
- **WHEN** el usuario activa un enlace ancla interno
- **THEN** la vista se desplaza de forma suave hasta la sección destino

#### Scenario: Respeto a prefers-reduced-motion
- **WHEN** el usuario tiene activada la preferencia de movimiento reducido
- **THEN** el desplazamiento y las animaciones se reducen o desactivan

### Requirement: Metadatos SEO

El sitio SHALL definir metadatos SEO básicos: title "Pauliello Car Detail | Estética vehicular y detailing", meta description provista, keywords del rubro, idioma `es-AR` y un único `<h1>` en el hero con jerarquía de headings correcta.

#### Scenario: Title y description presentes
- **WHEN** la página se carga
- **THEN** el `<title>` y la `<meta name="description">` coinciden con los textos definidos para SEO

#### Scenario: Jerarquía de headings
- **WHEN** se inspecciona la estructura de encabezados
- **THEN** existe un solo `<h1>` y las secciones usan `<h2>`/`<h3>` en orden lógico sin saltos

### Requirement: Tema visual premium oscuro

El sitio SHALL aplicar un tema oscuro premium con la paleta definida (negro carbón `#0B0B0B`, gris oscuro `#171717`, blanco `#FFFFFF`, gris claro `#D4D4D4`, dorado suave `#D6A84F`, azul oscuro opcional `#0F172A`), una tipografía moderna, gradientes oscuros, bordes sutiles en cards, botones redondeados y efectos hover.

#### Scenario: Paleta y tipografía aplicadas
- **WHEN** la landing se renderiza
- **THEN** el fondo es oscuro, los acentos usan el dorado definido y se aplica la tipografía moderna configurada

#### Scenario: Contraste accesible
- **WHEN** se evalúa el contraste de texto sobre fondo
- **THEN** el texto de cuerpo cumple el mínimo WCAG AA y la página pasa las verificaciones de AXE

### Requirement: Compatibilidad con SSR

El sitio SHALL renderizar correctamente bajo SSR sin acceder a APIs del navegador durante el render de servidor.

#### Scenario: Render en servidor sin errores
- **WHEN** la app se renderiza en el servidor (SSR)
- **THEN** no se accede a `window`/`document`/`IntersectionObserver` sin guardas de plataforma y el HTML se genera sin errores
