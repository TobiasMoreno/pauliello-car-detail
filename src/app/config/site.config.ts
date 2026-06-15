/**
 * Configuración centralizada del sitio.
 *
 * REEMPLAZAR antes de publicar:
 * - WHATSAPP_NUMBER: número real en formato internacional sin signos (ej. 5491122334455).
 * - INSTAGRAM_URL: ya apunta al perfil real; verificar si cambia.
 * - CONTACT_ADDRESS / CONTACT_HOURS: completar con datos reales o dejar como están.
 */

/** Número de WhatsApp en formato internacional. REEMPLAZAR `549XXXXXXXXXX` por el real. */
export const WHATSAPP_NUMBER = '549XXXXXXXXXX';

/** Mensaje prearmado por defecto para los CTA genéricos. */
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola, quiero consultar por un servicio de detailing para mi auto';

/** Perfil de Instagram de la marca. */
export const INSTAGRAM_URL = 'https://www.instagram.com/pauliello_cardetail/';

/** Placeholder de ubicación. REEMPLAZAR por la dirección real o dejar como referencia. */
export const CONTACT_ADDRESS = 'Ubicación a confirmar — consultá por WhatsApp';

/** Placeholder de horarios. REEMPLAZAR por los horarios reales de atención. */
export const CONTACT_HOURS = 'Horarios a confirmar — coordinamos el turno por WhatsApp';

/**
 * Construye el enlace `wa.me` con el mensaje codificado.
 * @param message Mensaje personalizado opcional; usa el mensaje por defecto si se omite.
 */
export function buildWhatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
