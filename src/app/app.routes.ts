import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlatosComponent } from './pages/platos/platos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'platos', component: PlatosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: '**', component: NoEncontradoComponent }, // ruta comodín
];
