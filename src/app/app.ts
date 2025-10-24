import { Component } from '@angular/core';
import { Header } from "./header/header";
//import { Home } from "./home/home";
import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
