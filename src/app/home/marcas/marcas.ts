import { Component, inject } from '@angular/core';
import { MarcasService } from './marcas.service';
import { Marca } from './marca/marca';

@Component({
  selector: 'app-marcas',
  imports: [Marca],
  templateUrl: './marcas.html',
  styleUrl: './marcas.css'
})
export class Marcas {
  private marcasService = inject(MarcasService);
  marcas = this.marcasService.Marcas;
}
