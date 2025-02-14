import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValeService {
  private vales: string[] = [
    "Vale por un beso 💋",
    "Vale por una cena romántica 🍷",
    "Vale por un día de películas juntos 🎬",
    "Vale por un abrazo cálido 🤗",
    "Vale por una tarde de juegos 🎮",
    "Vale por una caminata bajo las estrellas 🌟"
  ];

  // Método para obtener un vale aleatorio
  obtenerVale(): string {
    const indice = Math.floor(Math.random() * this.vales.length);
    return this.vales[indice];
  }
}
