import { Injectable } from '@angular/core';
import { DUMMY_MARCAS } from '../../DUMMY-MARCAS';

@Injectable({
    providedIn: 'root'
})
export class MarcasService {
  get Marcas() {
    return DUMMY_MARCAS;
  }
}