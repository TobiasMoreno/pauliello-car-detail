import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { SERVICES } from '../data/landing.data';

/** Sección de servicios: 6 cards generadas por @for con íconos lineales y hover. */
@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  template: `
    <section appRevealOnScroll id="servicios" class="scroll-mt-20 bg-dark">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">Servicios de estética vehicular</h2>
          <p class="mt-5 text-lg text-light">
            Soluciones pensadas para limpiar, renovar, proteger y mejorar la presentación de tu
            vehículo.
          </p>
        </div>
        <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (service of services; track service.title) {
            <li
              class="group rounded-2xl border border-white/10 bg-carbon p-6 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-black/30"
            >
              <span
                class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold/20"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  aria-hidden="true"
                >
                  <path [attr.d]="service.iconPath" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <h3 class="mt-5 text-xl font-semibold text-white">{{ service.title }}</h3>
              <p class="mt-3 text-base text-light">{{ service.description }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  protected readonly services = SERVICES;
}
