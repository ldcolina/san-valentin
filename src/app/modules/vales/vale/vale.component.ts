import { Component } from '@angular/core';

@Component({
  selector: 'app-vale',
  templateUrl: './vale.component.html',
  styleUrls: ['./vale.component.css']
})
export class ValeComponent {
  vales: string[] = [
    "Vale por un beso 💋",
    "Vale por una cena romántica 🍷",
    "Vale por un día de películas juntos 🎬"
  ];
  valeActual: string = "Raspa para ver tu vale 💌";

  generarVale() {
    const indice = Math.floor(Math.random() * this.vales.length);
    this.valeActual = this.vales[indice];
  }
}
