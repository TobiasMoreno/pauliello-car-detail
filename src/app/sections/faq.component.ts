import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { FAQ_ITEMS } from '../data/landing.data';

/** Sección FAQ con disclosure accesible (aria-expanded / aria-controls). */
@Component({
  selector: 'app-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  template: `
    <section appRevealOnScroll class="scroll-mt-20 bg-dark">
      <div class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">Preguntas frecuentes</h2>
        <ul class="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          @for (item of faqItems; track item.question; let i = $index) {
            <li class="bg-carbon">
              <h3>
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
                  [attr.aria-expanded]="openIndex() === i"
                  [attr.aria-controls]="'faq-panel-' + i"
                  [id]="'faq-trigger-' + i"
                  (click)="toggle(i)"
                >
                  <span class="text-base font-semibold text-white">{{ item.question }}</span>
                  <svg
                    class="shrink-0 text-gold transition-transform"
                    [style.transform]="openIndex() === i ? 'rotate(180deg)' : 'none'"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </h3>
              @if (openIndex() === i) {
                <div
                  [id]="'faq-panel-' + i"
                  role="region"
                  [attr.aria-labelledby]="'faq-trigger-' + i"
                  class="px-5 pb-5 text-base text-light"
                >
                  {{ item.answer }}
                </div>
              }
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class FaqComponent {
  protected readonly faqItems = FAQ_ITEMS;
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
