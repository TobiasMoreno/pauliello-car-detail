/**
 * Configuración centralizada del sitio.
 *
 * REEMPLAZAR antes de publicar:
 * - INSTAGRAM_URL: ya apunta al perfil real; verificar si cambia.
 * - CONTACT_ADDRESS / CONTACT_HOURS: completar con datos reales o dejar como están.
 */

/** Número de WhatsApp en formato internacional, sin signos (+54 9 3513 13-8222). */
export const WHATSAPP_NUMBER = '5493513138222';

/** Mensaje prearmado por defecto para los CTA genéricos. */
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola, quiero consultar por un servicio de detailing para mi auto';

/** Perfil de Instagram de la marca. */
export const INSTAGRAM_URL = 'https://www.instagram.com/pauliello_cardetail/';

/** Texto de ubicación mostrado en la sección de contacto. */
export const CONTACT_ADDRESS = 'Córdoba — coordinamos el turno por WhatsApp';

/** Enlace a la ubicación en Google Maps. */
export const CONTACT_MAP_URL = 'https://maps.app.goo.gl/paQRRwQ29yznC1xd9';

/** Placeholder de horarios. REEMPLAZAR por los horarios reales de atención. */
export const CONTACT_HOURS = 'Horarios a confirmar — coordinamos el turno por WhatsApp';

/**
 * Construye el enlace `wa.me` con el mensaje codificado.
 * @param message Mensaje personalizado opcional; usa el mensaje por defecto si se omite.
 */
export function buildWhatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
