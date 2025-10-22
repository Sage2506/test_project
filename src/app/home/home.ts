import { Component } from '@angular/core';
import { Marcas } from "./marcas/marcas";

@Component({
  selector: 'app-home',
  imports: [Marcas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
