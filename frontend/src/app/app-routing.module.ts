import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuResComponent } from './menu-res/menu-res.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CalificarComponent } from './calificar/calificar.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuResComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'calificar', component: CalificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
