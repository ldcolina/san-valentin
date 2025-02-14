import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoemaService {
  private versos: string[] = [
    'Tus ojos reflejan la luz de las estrellas.',
    'En cada latido encuentro tu esencia.',
    'Eres mi sol en los días grises.',
    'Tus besos son poesía en mi alma.',
    'Cada instante contigo es un verso nuevo.'
  ];

  obtenerPoema(): string {
    const poema = [];
    for (let i = 0; i < 4; i++) {
      const versoAleatorio = this.versos[Math.floor(Math.random() * this.versos.length)];
      poema.push(versoAleatorio);
    }
    return poema.join('\n');
  }
}
