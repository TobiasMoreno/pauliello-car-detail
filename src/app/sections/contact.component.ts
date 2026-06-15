import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { CONTACT_ADDRESS, CONTACT_HOURS, INSTAGRAM_URL } from '../config/site.config';
import { WhatsappButtonComponent } from '../shared/whatsapp-button.component';

/**
 * Sección de contacto. Ubicación y horarios son placeholders configurables
 * (site.config.ts). No se inventan dirección, teléfono ni horarios reales.
 */
@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective, WhatsappButtonComponent],
  template: `
    <section appRevealOnScroll id="contacto" class="scroll-mt-20 bg-carbon">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div class="grid gap-10 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold text-white sm:text-4xl">Consultá por tu vehículo</h2>
            <p class="mt-5 text-lg text-light">
              Escribinos por WhatsApp y te asesoramos para elegir el servicio ideal según el estado
              de tu auto.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <app-whatsapp-button label="Escribinos por WhatsApp" />
              <a
                [href]="instagramUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Seguinos en Instagram
              </a>
            </div>
          </div>

          <dl class="grid gap-4 self-start rounded-2xl border border-white/10 bg-dark p-6">
            <div>
              <dt class="text-sm font-semibold uppercase tracking-wide text-gold">Ubicación</dt>
              <!-- REEMPLAZAR: dirección real en CONTACT_ADDRESS (site.config.ts). -->
              <dd class="mt-1 text-base text-light">{{ contactAddress }}</dd>
            </div>
            <div>
              <dt class="text-sm font-semibold uppercase tracking-wide text-gold">Horarios</dt>
              <!-- REEMPLAZAR: horarios reales en CONTACT_HOURS (site.config.ts). -->
              <dd class="mt-1 text-base text-light">{{ contactHours }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  protected readonly instagramUrl = INSTAGRAM_URL;
  protected readonly contactAddress = CONTACT_ADDRESS;
  protected readonly contactHours = CONTACT_HOURS;
}
