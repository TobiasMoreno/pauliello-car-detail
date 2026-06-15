import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NAV_LINKS } from '../data/landing.data';
import { WhatsappButtonComponent } from '../shared/whatsapp-button.component';

/** Header sticky con marca, navegación por anclas y menú accesible en mobile. */
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WhatsappButtonComponent],
  template: `
    <header
      class="sticky top-0 z-40 border-b border-white/10 bg-carbon/90 backdrop-blur supports-[backdrop-filter]:bg-carbon/70"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#inicio"
          class="text-lg font-extrabold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Pauliello <span class="text-gold">Car Detail</span>
        </a>

        <nav aria-label="Navegación principal" class="hidden items-center gap-6 md:flex">
          @for (link of navLinks; track link.fragment) {
            <a
              [href]="'#' + link.fragment"
              class="text-sm font-medium text-light transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="hidden md:block">
          <app-whatsapp-button label="Reservar turno" />
        </div>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-menu"
          aria-label="Abrir menú de navegación"
          (click)="toggleMenu()"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            @if (menuOpen()) {
              <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
            } @else {
              <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
            }
          </svg>
        </button>
      </div>

      @if (menuOpen()) {
        <nav
          id="mobile-menu"
          aria-label="Navegación principal"
          class="border-t border-white/10 bg-carbon px-4 py-4 md:hidden"
        >
          <ul class="flex flex-col gap-1">
            @for (link of navLinks; track link.fragment) {
              <li>
                <a
                  [href]="'#' + link.fragment"
                  class="block rounded-md px-3 py-2 text-base font-medium text-light transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  (click)="closeMenu()"
                >
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
          <div class="mt-4">
            <app-whatsapp-button label="Reservar turno" />
          </div>
        </nav>
      }
    </header>
  `,
})
export class HeaderComponent {
  protected readonly navLinks = NAV_LINKS;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
