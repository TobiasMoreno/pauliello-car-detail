import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { PROCESS_STEPS } from '../data/landing.data';

/** Sección de proceso: 5 pasos numerados con descripciones. */
@Component({
  selector: 'app-process',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  template: `
    <section appRevealOnScroll id="proceso" class="scroll-mt-20 bg-dark">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Así de simple es reservar tu turno
          </h2>
        </div>
        <ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          @for (step of steps; track step.step) {
            <li class="rounded-2xl border border-white/10 bg-carbon p-6">
              <span
                class="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-lg font-bold text-carbon"
                aria-hidden="true"
              >
                {{ step.step }}
              </span>
              <h3 class="mt-4 text-lg font-semibold text-white">{{ step.title }}</h3>
              <p class="mt-2 text-sm text-light">{{ step.description }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class ProcessComponent {
  protected readonly steps = PROCESS_STEPS;
}
