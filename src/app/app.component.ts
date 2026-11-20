import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  auth = inject(AuthService);
  private router = inject(Router);

  nombre = 'Sabor Andino';
  menu = [
    { ruta: '/inicio', texto: 'Inicio', icono: '🏠' },
    { ruta: '/platos', texto: 'Platos', icono: '🍽️' },
    { ruta: '/categorias', texto: 'Categorías', icono: '🗂️' },
    { ruta: '/mesas', texto: 'Mesas', icono: '🪑' },
    { ruta: '/pedidos', texto: 'Pedidos', icono: '🧾' },
  ];

  cerrarSesion(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
