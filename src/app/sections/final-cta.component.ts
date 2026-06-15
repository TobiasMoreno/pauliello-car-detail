import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { WhatsappButtonComponent } from '../shared/whatsapp-button.component';

/** Sección de cierre con el CTA final a WhatsApp. */
@Component({
  selector: 'app-final-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective, WhatsappButtonComponent],
  template: `
    <section appRevealOnScroll class="scroll-mt-20 bg-gradient-to-b from-carbon to-navy">
      <div class="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Dale a tu auto el cuidado que se merece
        </h2>
        <p class="mt-5 text-lg text-light">
          Reservá tu turno y mejorá la estética, protección y presentación de tu vehículo.
        </p>
        <div class="mt-8 flex justify-center">
          <app-whatsapp-button label="Reservar turno por WhatsApp" />
        </div>
      </div>
    </section>
  `,
})
export class FinalCtaComponent {}
