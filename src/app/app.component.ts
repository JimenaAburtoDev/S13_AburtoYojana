import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombre = 'Sabor Andino';
  menu = [
    { ruta: '/inicio', texto: 'Inicio', icono: '🏠' },
    { ruta: '/platos', texto: 'Platos', icono: '🍽️' },
    { ruta: '/categorias', texto: 'Categorías', icono: '🗂️' },
    { ruta: '/mesas', texto: 'Mesas', icono: '🪑' },
    { ruta: '/pedidos', texto: 'Pedidos', icono: '🧾' },
  ];
}
