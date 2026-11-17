import { Component, inject } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent {
  datos = inject(DatosService);
}
