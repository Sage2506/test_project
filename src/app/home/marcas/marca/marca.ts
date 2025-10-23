import { Component, computed, input } from '@angular/core';
import { MarcaModel } from './marca.model';

@Component({
  selector: 'app-marca',
  imports: [],
  templateUrl: './marca.html',
  styleUrl: './marca.css'
})
export class Marca {
  marca = input.required<MarcaModel>();

  imagePath = computed(() => this.marca().avatar);
}
