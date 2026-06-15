import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { TRUST_POINTS } from '../data/landing.data';

/** Sección de confianza: título, texto y puntos destacados. */
@Component({
  selector: 'app-trust',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  template: `
    <section appRevealOnScroll class="scroll-mt-20 bg-carbon">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Cuidado profesional para cada vehículo
          </h2>
          <p class="mt-5 text-lg text-light">
            Cada auto necesita un tratamiento distinto. Por eso evaluamos el estado del vehículo y
            recomendamos el servicio adecuado para mejorar su estética, proteger sus materiales y
            lograr una terminación prolija.
          </p>
        </div>
        <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (point of trustPoints; track point) {
            <li class="flex items-start gap-3 rounded-xl border border-white/10 bg-dark p-4">
              <svg
                class="mt-0.5 shrink-0 text-gold"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="text-base text-white">{{ point }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class TrustComponent {
  protected readonly trustPoints = TRUST_POINTS;
}
