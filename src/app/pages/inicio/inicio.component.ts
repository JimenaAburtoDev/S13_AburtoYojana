import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  private datos = inject(DatosService);

  get kpis() {
    const d = this.datos;
    return [
      { titulo: 'Platos en carta', valor: d.platos.length, icono: '🍽️', ruta: '/platos' },
      { titulo: 'Categorías', valor: d.categorias.length, icono: '🗂️', ruta: '/categorias' },
      { titulo: 'Mesas ocupadas', valor: `${d.mesas.filter((m) => m.estado === 'Ocupada').length}/${d.mesas.length}`, icono: '🪑', ruta: '/mesas' },
      { titulo: 'Pedidos pendientes', valor: d.pedidos.filter((p) => p.estado !== 'Entregado').length, icono: '🧾', ruta: '/pedidos' },
      { titulo: 'Ventas del día (S/)', valor: d.pedidos.reduce((s, p) => s + p.total, 0), icono: '💰', ruta: '/pedidos' },
    ];
  }
}
