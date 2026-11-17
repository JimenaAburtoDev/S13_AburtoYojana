import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pedidos.component.html',
})
export class PedidosComponent {
  datos = inject(DatosService);

  clase(estado: string): string {
    return estado === 'Entregado' ? 'verde' : estado === 'En cocina' ? 'azul' : 'amarillo';
  }
}
