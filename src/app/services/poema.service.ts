import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoemaService {
  private versos: string[] = [
    'Tu amor es mi obra maestra.',
    'Cada trazo refleja tu esencia.',
    'Jugar contigo es ganar el corazón.',
    'Eres mi videojuego favorito.',
    'Nuestro amor es un tablero ganado.',
    'Cada viaje es un cuadro pintado.',
    'Tu risa es mi melodía diaria.',
    'El arte de amarte es eterno.',
    'Junto a ti, cada paso es perfecto.',
    'En el campamento, tu amor es el fuego.',
    'Tus besos son mi mayor inspiración.',
    'Cada día contigo es una obra nueva.',
    'El viento lleva nuestra historia de amor.',
    'Eres la pieza clave de mi vida.',
    'En cada juego, siempre somos equipo.',
    'Bajo las estrellas, tú eres mi luz.',
    'Tu abrazo es mi refugio y mi hogar.',
    'Cada viaje contigo es un sueño hecho realidad.',
    'La pintura cobra vida en tu mirada.',
    'Jugar a tu lado es mi mejor aventura.',
    'Cada rincón del campamento es nuestro.',
    'Nuestros viajes son historias por contar.',
    'Eres el pincel que da color a mi vida.',
    'Cada momento contigo es un nivel ganado.',
    'Tus caricias son mi paleta de colores.',
    'Eres mi compañero en este juego llamado vida.',
    'Cada paso contigo es un cuadro en movimiento.',
    'Bajo la luna, tu amor es mi guía.',
    'La vida a tu lado es el mejor viaje.',
    'Cada partida contigo es un recuerdo eterno.',
    'Tus palabras son el arte que calma mi alma.',
    'Nuestro amor es un viaje sin fin.',
    'El tablero de la vida se llena de amor contigo.',
    'Tus ojos son mi mapa hacia el amor.',
    'Cada ruta contigo es una nueva aventura.',
    'Tu amor es la pintura que ilumina mi mundo.',
    'En cada juego de mesa, siempre te elijo.',
    'Cada rincón de nuestro campamento es un tesoro.',
    'Junto a ti, el mundo es un lienzo infinito.',
    'Tu risa es la música de mi alma.',
    'El arte de amarte no tiene fin.',
    'Cada viaje contigo es una nueva historia.',
    'Tu abrazo es el mejor lugar en el mundo.',
    'Cada mirada tuya es un trazo de amor.',
    'Tu amor es mi videojuego favorito.',
    'Bajo el cielo, tus palabras son mi paz.',
    'Tus caricias son mi obra más preciada.',
    'A tu lado, todo es un juego de amor.'
  ];


  obtenerPoema(): string {
    const poema = [];
    const versosDisponibles = [...this.versos];

    for (let i = 0; i < 4; i++) {
      const indexAleatorio = Math.floor(Math.random() * versosDisponibles.length);
      const versoAleatorio = versosDisponibles.splice(indexAleatorio, 1)[0];
      poema.push(versoAleatorio);
    }

    return poema.join('\n');
  }
}
