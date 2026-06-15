import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';
import { GALLERY_ITEMS, GalleryItem } from '../data/landing.data';

/**
 * Galería de trabajos con placeholders reemplazables y modal accesible.
 *
 * REEMPLAZAR: cuando se carguen fotos reales, completar `imageSrc` en
 * `GALLERY_ITEMS` (landing.data.ts) y renderizar `<img ngSrc=...>`
 * (NgOptimizedImage) en lugar del placeholder con gradiente.
 */
@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  host: { '(document:keydown.escape)': 'close()' },
  template: `
    <section appRevealOnScroll id="trabajos" class="scroll-mt-20 bg-carbon">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">Resultados que se ven</h2>
          <p class="mt-5 text-lg text-light">
            Mirá algunos trabajos realizados y comprobá cómo cambia la presentación de un vehículo
            cuando se trabaja con detalle.
          </p>
        </div>

        <ul class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (item of items; track item.id) {
            <li>
              <button
                type="button"
                class="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                (click)="open(item)"
              >
                <!-- REEMPLAZAR: placeholder visual. Sustituir por <img> con la foto real del trabajo. -->
                <span
                  class="absolute inset-0 bg-gradient-to-br from-navy via-dark to-carbon transition group-hover:scale-105"
                  aria-hidden="true"
                ></span>
                <span class="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                  {{ item.label }}
                </span>
                <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white">
                  {{ item.caption }}
                </span>
              </button>
            </li>
          }
        </ul>
      </div>
    </section>

    @if (selected(); as item) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="'Vista ampliada: ' + item.caption"
        (click)="close()"
      >
        <div class="relative w-full max-w-3xl" (click)="$event.stopPropagation()">
          <!-- REEMPLAZAR: placeholder ampliado. Sustituir por la imagen real en alta resolución. -->
          <div
            class="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-navy via-dark to-carbon"
            aria-hidden="true"
          >
            <span class="text-sm text-light">{{ item.label }} — {{ item.caption }}</span>
          </div>
          <button
            #closeButton
            type="button"
            class="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-carbon shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Cerrar vista ampliada"
            (click)="close()"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>
    }
  `,
})
export class GalleryComponent {
  protected readonly items = GALLERY_ITEMS;
  protected readonly selected = signal<GalleryItem | null>(null);

  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  private trigger: HTMLElement | null = null;

  protected open(item: GalleryItem): void {
    this.trigger = document.activeElement as HTMLElement | null;
    this.selected.set(item);
    // Mover el foco al modal una vez renderizado.
    queueMicrotask(() => this.closeButton()?.nativeElement.focus());
  }

  protected close(): void {
    if (!this.selected()) {
      return;
    }
    this.selected.set(null);
    this.trigger?.focus();
    this.trigger = null;
  }
}
