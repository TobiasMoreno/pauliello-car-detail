import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { SALE_BENEFITS } from '../data/landing.data';
import { WhatsappButtonComponent } from '../shared/whatsapp-button.component';

/** Sección destacada de preparación para venta con CTA contextual. */
@Component({
  selector: 'app-sale',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective, WhatsappButtonComponent],
  template: `
    <section appRevealOnScroll class="scroll-mt-20 bg-carbon">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div
          class="overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-navy via-dark to-carbon p-8 sm:p-12"
        >
          <div class="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 class="text-3xl font-bold text-white sm:text-4xl">¿Vas a vender tu auto?</h2>
              <p class="mt-5 text-lg text-light">
                La primera impresión importa. Un vehículo limpio, cuidado y bien presentado puede
                generar más confianza al momento de mostrarlo o publicarlo.
              </p>
              <div class="mt-8">
                <app-whatsapp-button
                  label="Preparar mi auto para venta"
                  message="Hola, quiero preparar mi auto para venta. ¿Me asesoran con el servicio?"
                />
              </div>
            </div>
            <ul class="grid gap-3">
              @for (benefit of benefits; track benefit) {
                <li class="flex items-start gap-3 rounded-xl bg-white/5 p-4">
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
                  <span class="text-base text-white">{{ benefit }}</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SaleComponent {
  protected readonly benefits = SALE_BENEFITS;
}
