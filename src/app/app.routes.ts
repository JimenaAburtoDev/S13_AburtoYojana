import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlatosComponent } from './pages/platos/platos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard, loginGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'inicio', component: InicioComponent, canActivate: [authGuard] },
  { path: 'platos', component: PlatosComponent, canActivate: [authGuard] },
  { path: 'categorias', component: CategoriasComponent, canActivate: [authGuard] },
  { path: 'mesas', component: MesasComponent, canActivate: [authGuard] },
  { path: 'pedidos', component: PedidosComponent, canActivate: [authGuard] },
  { path: '**', component: NoEncontradoComponent }, // ruta comodín
];
