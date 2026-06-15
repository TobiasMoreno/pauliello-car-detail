## ADDED Requirements

### Requirement: Constante configurable de WhatsApp

El sistema SHALL centralizar la configuración de WhatsApp en una única constante que contenga el número (placeholder `549XXXXXXXXXX`) y un mensaje por defecto prearmado, evitando hardcodear el enlace en cada CTA.

#### Scenario: Punto único de configuración
- **WHEN** se necesita cambiar el número o el mensaje de WhatsApp
- **THEN** alcanza con editar la constante de configuración en un solo archivo y todos los CTA reflejan el cambio

#### Scenario: Número placeholder por defecto
- **WHEN** no se ha configurado un número real
- **THEN** el valor por defecto es el placeholder `549XXXXXXXXXX`, claramente identificable como pendiente de reemplazo

### Requirement: Generación del enlace wa.me

El sistema SHALL construir el enlace de WhatsApp con el formato `https://wa.me/<numero>?text=<mensaje-url-encoded>`, codificando correctamente el mensaje, y permitiendo un mensaje personalizado por CTA.

#### Scenario: Enlace con mensaje por defecto
- **WHEN** un CTA genérico solicita el enlace de WhatsApp
- **THEN** se produce `https://wa.me/<numero>?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20de%20detailing%20para%20mi%20auto`

#### Scenario: Enlace con mensaje personalizado
- **WHEN** un CTA pasa un mensaje propio (por ejemplo, preparación para venta)
- **THEN** el enlace usa ese mensaje correctamente codificado en el parámetro `text`

### Requirement: CTAs a WhatsApp en toda la landing

El sistema SHALL usar el enlace de WhatsApp en todos los CTA principales y secundarios de conversión: header ("Reservar turno"), hero ("Reservar turno por WhatsApp"), sección de venta ("Preparar mi auto para venta"), contacto y CTA final.

#### Scenario: CTA abre WhatsApp en pestaña nueva
- **WHEN** el usuario activa cualquier CTA de WhatsApp
- **THEN** se abre el enlace `wa.me` en una pestaña nueva con `rel="noopener"` y un texto accesible descriptivo

#### Scenario: CTA accesible
- **WHEN** se inspecciona un CTA de WhatsApp
- **THEN** tiene un nombre accesible claro (texto o `aria-label`) y foco visible

### Requirement: Botón flotante de WhatsApp en mobile

El sistema SHALL mostrar un botón flotante (sticky) de WhatsApp persistente en pantallas mobile para acceso inmediato a la consulta.

#### Scenario: Visible en mobile
- **WHEN** la landing se ve en una pantalla mobile
- **THEN** un botón flotante de WhatsApp permanece visible y fijo sobre el contenido mientras se hace scroll

#### Scenario: Acción del botón flotante
- **WHEN** el usuario toca el botón flotante
- **THEN** se abre el enlace de WhatsApp con el mensaje por defecto

#### Scenario: Botón flotante accesible
- **WHEN** se evalúa el botón flotante
- **THEN** tiene `aria-label` descriptivo, área táctil suficiente y no obstruye permanentemente contenido esencial
