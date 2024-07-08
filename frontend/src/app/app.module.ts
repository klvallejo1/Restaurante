import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { MenuResComponent } from './menu-res/menu-res.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CalificarComponent } from './calificar/calificar.component';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { FormularioMeseroComponent } from './formulario-mesero/formulario-mesero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormularioMenuComponent } from './formulario-menu/formulario-menu.component';
import { TablaMenuComponent } from './tabla-menu/tabla-menu.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    MenuResComponent,
    PedidoComponent,
    CalificarComponent,
    CardMenuComponent,
    FormularioMeseroComponent,
    FormularioMenuComponent,
    TablaMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
