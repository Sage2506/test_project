import { Component, inject } from '@angular/core';
import { MarcasService } from './marcas.service';

@Component({
  selector: 'app-marcas',
  imports: [],
  templateUrl: './marcas.html',
  styleUrl: './marcas.css'
})
export class Marcas {
  private marcasService = inject(MarcasService);
  marcas = this.marcasService.Marcas;
}
