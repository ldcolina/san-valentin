import { Component } from '@angular/core';

@Component({
  selector: 'app-poema',
  templateUrl: './poema.component.html',
  styleUrls: ['./poema.component.css']
})
export class PoemaComponent {
  frases: string[] = [
    "Eres la luz que ilumina mis días.",
    "Contigo, cada momento es mágico.",
    "Eres mi sueño hecho realidad."
  ];
  fraseActual: string = this.frases[0];

  generarPoema() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseActual = this.frases[indice];
  }
}
