import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './platos.component.html',
})
export class PlatosComponent {
  datos = inject(DatosService);
}
