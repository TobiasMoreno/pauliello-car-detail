import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { HeaderComponent } from './shell/header.component';
import { FooterComponent } from './shell/footer.component';
import { HeroComponent } from './sections/hero.component';
import { TrustComponent } from './sections/trust.component';
import { ServicesComponent } from './sections/services.component';
import { GalleryComponent } from './sections/gallery.component';
import { ProcessComponent } from './sections/process.component';
import { SaleComponent } from './sections/sale.component';
import { FaqComponent } from './sections/faq.component';
import { ContactComponent } from './sections/contact.component';
import { FinalCtaComponent } from './sections/final-cta.component';
import { WhatsappFabComponent } from './shared/whatsapp-fab.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    TrustComponent,
    ServicesComponent,
    GalleryComponent,
    ProcessComponent,
    SaleComponent,
    FaqComponent,
    ContactComponent,
    FinalCtaComponent,
    FooterComponent,
    WhatsappFabComponent,
  ],
  templateUrl: './app.html',
})
export class App {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('Pauliello Car Detail | Estética vehicular y detailing');
    this.meta.updateTag({
      name: 'description',
      content:
        'Servicios de estética vehicular, detailing interior, lavado premium, tratamientos de pintura y preparación para venta. Consultá por WhatsApp y reservá tu turno.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'estética vehicular, detailing automotor, lavado premium, detailing interior, pulido de autos, preparación para venta, car detail, limpieza de autos',
    });
  }
}
