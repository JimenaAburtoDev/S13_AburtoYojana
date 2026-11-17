import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-encontrado',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="tarjeta" style="text-align:center; padding:3rem">
      <div style="font-size:3rem">🍳</div>
      <h2>404 · Página no encontrada</h2>
      <p>Esta ruta no existe en el menú de Sabor Andino.</p>
      <a routerLink="/inicio">← Volver al inicio</a>
    </div>
  `,
})
export class NoEncontradoComponent {}
