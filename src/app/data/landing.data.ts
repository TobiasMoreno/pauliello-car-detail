/**
 * Contenido tipado de la landing. Editar el copy acá evita duplicar markup.
 */

export interface ServiceItem {
  readonly title: string;
  readonly description: string;
  /** Path SVG (lineal) usado dentro de un `<svg viewBox="0 0 24 24">`. */
  readonly iconPath: string;
}

export interface ProcessStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface GalleryItem {
  readonly id: string;
  readonly label: string;
  readonly caption: string;
  /**
   * REEMPLAZAR: cuando se tengan fotos reales, completar con la ruta de la imagen
   * (ej. 'images/trabajos/interior-01.webp') y migrar el template a NgOptimizedImage.
   */
  readonly imageSrc: string | null;
}

export const SERVICES: readonly ServiceItem[] = [
  {
    title: 'Lavado premium',
    description:
      'Limpieza exterior e interior con productos profesionales para dejar tu auto impecable.',
    iconPath: 'M3 13l2-5a3 3 0 0 1 2.8-2h8.4A3 3 0 0 1 19 8l2 5M5 17h14M6 17v2M18 17v2',
  },
  {
    title: 'Detailing interior',
    description:
      'Limpieza profunda de tapizados, alfombras, plásticos, paneles y detalles del habitáculo.',
    iconPath: 'M4 11l1.5-4.5A2 2 0 0 1 7.4 5H12v6M12 5h4.6a2 2 0 0 1 1.9 1.5L20 11M4 11h16v5H4z',
  },
  {
    title: 'Pulido y abrillantado',
    description:
      'Recuperación del brillo y mejora estética de la pintura para lograr una mejor terminación visual.',
    iconPath: 'M12 3v2M12 19v2M5 12H3M21 12h-2M7 7l-1.5-1.5M18.5 18.5L17 17M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z',
  },
  {
    title: 'Tratamientos de protección',
    description:
      'Aplicación de tratamientos acrílicos o cerámicos para proteger la pintura y mantener el vehículo en mejores condiciones.',
    iconPath: 'M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z',
  },
  {
    title: 'Limpieza de motor',
    description:
      'Limpieza cuidada del vano motor, ideal para mejorar la presentación general del vehículo.',
    iconPath: 'M5 9h3l2-2h4l2 2h3v6h-3l-2 2h-4l-2-2H5zM12 9v6',
  },
  {
    title: 'Preparación para venta',
    description:
      'Servicio pensado para quienes quieren vender su auto y mejorar su imagen antes de publicarlo.',
    iconPath: 'M3 7h13l3 5v5h-2M3 7v10h2M3 7l-1 3M9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: 1,
    title: 'Nos escribís',
    description: 'Consultás por WhatsApp y nos contás qué necesita tu vehículo.',
  },
  {
    step: 2,
    title: 'Evaluamos el estado',
    description: 'Podés enviarnos fotos o comentarnos qué tipo de servicio estás buscando.',
  },
  {
    step: 3,
    title: 'Te asesoramos',
    description: 'Te recomendamos el tratamiento más conveniente según el estado real del auto.',
  },
  {
    step: 4,
    title: 'Coordinamos el turno',
    description: 'Agendamos día y horario para realizar el trabajo.',
  },
  {
    step: 5,
    title: 'Retirás tu auto renovado',
    description: 'Te entregamos el vehículo limpio, cuidado y con una mejor presentación.',
  },
];

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: '¿Tengo que pedir turno?',
    answer:
      'Sí. Trabajamos con turnos para poder dedicarle el tiempo necesario a cada vehículo.',
  },
  {
    question: '¿Puedo consultar enviando fotos?',
    answer: 'Sí. Podés enviar fotos por WhatsApp para recibir una recomendación inicial.',
  },
  {
    question: '¿Cuánto demora el servicio?',
    answer:
      'Depende del estado del vehículo y del servicio elegido. Te lo confirmamos al momento de consultar.',
  },
  {
    question: '¿Qué servicio me conviene?',
    answer:
      'Si no sabés qué necesita tu auto, te asesoramos según el estado actual y el resultado que estés buscando.',
  },
  {
    question: '¿Hacen preparación para venta?',
    answer:
      'Sí. Podemos ayudarte a mejorar la presentación del vehículo antes de publicarlo o mostrarlo.',
  },
];

/**
 * Ítems de la galería. `imageSrc` es null mientras se usan placeholders.
 * REEMPLAZAR cada `imageSrc` por la ruta de la foto real del trabajo.
 */
export const GALLERY_ITEMS: readonly GalleryItem[] = [
  { id: 'g1', label: 'Interior', caption: 'Detailing de habitáculo', imageSrc: null },
  { id: 'g2', label: 'Exterior', caption: 'Lavado premium exterior', imageSrc: null },
  { id: 'g3', label: 'Pulido', caption: 'Pulido y abrillantado de pintura', imageSrc: null },
  { id: 'g4', label: 'Preparación para venta', caption: 'Auto listo para publicar', imageSrc: null },
  { id: 'g5', label: 'Interior', caption: 'Limpieza profunda de tapizados', imageSrc: null },
  { id: 'g6', label: 'Exterior', caption: 'Terminación prolija y brillo', imageSrc: null },
];

export interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Inicio', fragment: 'inicio' },
  { label: 'Servicios', fragment: 'servicios' },
  { label: 'Trabajos', fragment: 'trabajos' },
  { label: 'Proceso', fragment: 'proceso' },
  { label: 'Contacto', fragment: 'contacto' },
];

export const TRUST_POINTS: readonly string[] = [
  'Atención personalizada',
  'Productos profesionales',
  'Resultados visibles',
  'Turnos coordinados por WhatsApp',
  'Ideal para uso diario o preparación para venta',
];

export const SALE_BENEFITS: readonly string[] = [
  'Mejora la presentación visual',
  'Ayuda a destacar en fotos',
  'Genera más confianza en potenciales compradores',
  'Permite mostrar un auto más prolijo y cuidado',
];

export const HERO_CARDS: readonly string[] = [
  'Detailing interior',
  'Tratamientos de pintura',
  'Preparación para venta',
  'Resultados reales',
];
