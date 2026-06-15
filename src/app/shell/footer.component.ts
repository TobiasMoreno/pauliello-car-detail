import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INSTAGRAM_URL } from '../config/site.config';
import { NAV_LINKS } from '../data/landing.data';

/** Footer con navegación, enlace a Instagram y nota de marca. */
@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-white/10 bg-dark">
      <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div class="max-w-sm">
          <p class="text-lg font-extrabold text-white">
            Pauliello <span class="text-gold">Car Detail</span>
          </p>
          <p class="mt-3 text-sm text-light">
            Estética vehicular profesional. Cuidamos cada detalle de tu vehículo y coordinamos
            los turnos por WhatsApp.
          </p>
        </div>

        <nav aria-label="Navegación del pie" class="flex flex-col gap-2">
          @for (link of navLinks; track link.fragment) {
            <a
              [href]="'#' + link.fragment"
              class="text-sm text-light transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {{ link.label }}
            </a>
          }
          <a
            [href]="instagramUrl"
            target="_blank"
            rel="noopener"
            class="text-sm text-light transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Instagram
          </a>
        </nav>
      </div>

      <div class="border-t border-white/10 px-4 py-6 text-center text-xs text-light/70 sm:px-6">
        © Pauliello Car Detail — Estética vehicular y detailing.
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly navLinks = NAV_LINKS;
  protected readonly instagramUrl = INSTAGRAM_URL;
}
