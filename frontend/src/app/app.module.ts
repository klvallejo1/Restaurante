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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
