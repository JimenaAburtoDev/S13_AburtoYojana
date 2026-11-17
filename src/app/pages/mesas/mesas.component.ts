import { Component, inject } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-mesas',
  standalone: true,
  templateUrl: './mesas.component.html',
})
export class MesasComponent {
  datos = inject(DatosService);

  clase(estado: string): string {
    return estado === 'Libre' ? 'verde' : estado === 'Ocupada' ? 'rojo' : 'azul';
  }
}
