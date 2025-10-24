import { Component } from '@angular/core';
import { Marcas } from "./marcas/marcas";
//import { Productos } from "./productos/productos";

@Component({
  selector: 'app-home',
  imports: [Marcas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
