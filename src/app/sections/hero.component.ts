import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO_CARDS } from '../data/landing.data';
import { WhatsappButtonComponent } from '../shared/whatsapp-button.component';

/** Sección hero: título principal, subtítulo, CTAs y mini cards flotantes. */
@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappButtonComponent],
  template: `
    <section
      id="inicio"
      class="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-navy via-carbon to-carbon"
    >
      <div
        class="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      ></div>
      <div class="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p class="mb-4 inline-flex rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            Estética vehicular & detailing
          </p>
          <h1 class="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Estética vehicular profesional para que tu auto vuelva a brillar
          </h1>
          <p class="mt-6 max-w-xl text-lg text-light">
            Lavados premium, detailing interior, tratamientos de pintura y preparación para venta.
            Cuidamos cada detalle según el estado real de tu vehículo.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <app-whatsapp-button label="Reservar turno por WhatsApp" />
            <a
              href="#trabajos"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Ver trabajos realizados
            </a>
          </div>
        </div>

        <ul class="grid grid-cols-2 gap-4" aria-label="Destacados">
          @for (card of heroCards; track card) {
            <li
              class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:border-gold/40"
            >
              <span class="text-sm font-semibold text-white">{{ card }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly heroCards = HERO_CARDS;
}
