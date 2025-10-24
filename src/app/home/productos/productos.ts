import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  externalUrl = 'https://agricompra.com/product/equipo-de-volcado-de-macrobins/103194'; 
  safeUrl: SafeResourceUrl | undefined;

  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.externalUrl);
  }
}
