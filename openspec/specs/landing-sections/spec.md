# landing-sections

## Purpose

Definir el contenido y comportamiento de las secciones de la landing de Pauliello Car Detail (hero, confianza, servicios, galería, proceso, preparación para venta, FAQ, contacto y CTA final), incluyendo animaciones al scroll y copy en español argentino.

## Requirements

### Requirement: Sección Hero

La landing SHALL mostrar una sección hero con el título "Estética vehicular profesional para que tu auto vuelva a brillar", el subtítulo provisto, un CTA principal "Reservar turno por WhatsApp", un CTA secundario "Ver trabajos realizados" (ancla a la galería) y mini cards flotantes (Detailing interior, Tratamientos de pintura, Preparación para venta, Resultados reales) sobre fondo oscuro premium.

#### Scenario: Contenido del hero
- **WHEN** la landing carga
- **THEN** se muestra el título como único `<h1>`, el subtítulo, ambos CTA y las mini cards

#### Scenario: CTA secundario lleva a la galería
- **WHEN** el usuario activa "Ver trabajos realizados"
- **THEN** la vista se desplaza a la sección de galería de trabajos

### Requirement: Sección de confianza

La landing SHALL incluir una sección con título "Cuidado profesional para cada vehículo", el texto provisto y los puntos destacados (atención personalizada, productos profesionales, resultados visibles, turnos coordinados por WhatsApp, ideal para uso diario o preparación para venta).

#### Scenario: Puntos de confianza visibles
- **WHEN** el usuario llega a la sección de confianza
- **THEN** se muestran el título, el texto y la lista de puntos destacados

### Requirement: Sección de servicios

La landing SHALL mostrar una sección "Servicios de estética vehicular" con su descripción y seis cards: Lavado premium, Detailing interior, Pulido y abrillantado, Tratamientos de protección, Limpieza de motor y Preparación para venta, cada una con su texto, ícono lineal y efecto hover.

#### Scenario: Seis servicios renderizados
- **WHEN** el usuario ve la sección de servicios
- **THEN** se muestran las seis cards con su título y descripción correspondientes

#### Scenario: Cards desde datos
- **WHEN** se renderiza la grilla de servicios
- **THEN** las cards se generan iterando una estructura de datos (no markup duplicado manualmente)

### Requirement: Galería de trabajos con placeholders reemplazables

La landing SHALL incluir una sección "Resultados que se ven" con una galería en grid responsive, etiquetas (Interior, Exterior, Pulido, Preparación para venta), soporte de comparación antes/después y un modal accesible para ampliar la imagen. Las imágenes SHALL ser placeholders elegantes con puntos de reemplazo claramente marcados en el código.

#### Scenario: Galería con placeholders
- **WHEN** no hay imágenes reales cargadas
- **THEN** se muestran placeholders visuales con etiquetas y comentarios en el código que indican dónde reemplazarlos por fotos reales

#### Scenario: Modal de imagen accesible
- **WHEN** el usuario abre un ítem de la galería
- **THEN** se abre un modal con `role="dialog"` y `aria-modal`, el foco se mueve al modal, `Esc` lo cierra y el foco regresa al disparador

### Requirement: Sección de proceso de reserva

La landing SHALL mostrar una sección "Así de simple es reservar tu turno" con los cinco pasos: 1) Nos escribís, 2) Evaluamos el estado, 3) Te asesoramos, 4) Coordinamos el turno, 5) Retirás tu auto renovado, cada uno con su descripción.

#### Scenario: Cinco pasos en orden
- **WHEN** el usuario ve la sección de proceso
- **THEN** se muestran los cinco pasos numerados en orden con sus descripciones

### Requirement: Sección de preparación para venta

La landing SHALL incluir una sección destacada "¿Vas a vender tu auto?" con el texto provisto, la lista de beneficios y un CTA "Preparar mi auto para venta" que abre WhatsApp con un mensaje contextual a venta.

#### Scenario: CTA de venta con mensaje contextual
- **WHEN** el usuario activa "Preparar mi auto para venta"
- **THEN** se abre WhatsApp con un mensaje relacionado a preparación para venta

### Requirement: Sección de preguntas frecuentes

La landing SHALL mostrar una sección FAQ con al menos las cinco preguntas y respuestas provistas, presentadas de forma accesible (encabezados o disclosure con `aria-expanded`).

#### Scenario: FAQ accesible
- **WHEN** el usuario interactúa con una pregunta expandible
- **THEN** el estado de expansión se comunica con `aria-expanded` y el contenido es accesible por teclado

#### Scenario: Contenido de FAQ
- **WHEN** se ve la sección FAQ
- **THEN** aparecen las preguntas: pedir turno, consultar con fotos, demora del servicio, qué servicio conviene y preparación para venta, con sus respuestas

### Requirement: Sección de contacto

La landing SHALL incluir una sección "Consultá por tu vehículo" con el texto provisto, un botón de WhatsApp, un enlace a Instagram, y placeholders configurables para ubicación y horarios. No SHALL inventar dirección, teléfono ni horarios reales.

#### Scenario: Contacto sin datos inventados
- **WHEN** se ve la sección de contacto
- **THEN** la ubicación y los horarios se muestran como placeholders configurables y no como datos reales inventados

#### Scenario: Enlace a Instagram
- **WHEN** el usuario activa el enlace a Instagram
- **THEN** se abre el perfil de Instagram en una pestaña nueva con `rel="noopener"`

### Requirement: Sección CTA final

La landing SHALL cerrar con una sección "Dale a tu auto el cuidado que se merece", el texto provisto y un botón "Reservar turno por WhatsApp".

#### Scenario: CTA final presente
- **WHEN** el usuario llega al final de la página
- **THEN** se muestra el título, el texto y el CTA final a WhatsApp

### Requirement: Animaciones suaves al hacer scroll

Las secciones SHALL aparecer con animaciones suaves al entrar en el viewport, respetando `prefers-reduced-motion`.

#### Scenario: Reveal al scrollear
- **WHEN** una sección entra en el viewport
- **THEN** se aplica una animación de entrada suave

#### Scenario: Sin animación con movimiento reducido
- **WHEN** el usuario tiene `prefers-reduced-motion` activado
- **THEN** las animaciones de entrada se desactivan o reducen

### Requirement: Contenido en español argentino

Todo el copy de la landing SHALL estar en español argentino (voseo), coherente con los textos provistos.

#### Scenario: Copy en es-AR
- **WHEN** se revisa el texto de las secciones
- **THEN** usa español argentino (por ejemplo "consultá", "reservá", "escribinos")
