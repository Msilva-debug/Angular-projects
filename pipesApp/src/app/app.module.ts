import { LOCALE_ID, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Configuración del locale de la app
import localeEsHN from '@angular/common/locales/es-CO';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHN);
registerLocaleData(localeFrCA);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'fr-CA' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
