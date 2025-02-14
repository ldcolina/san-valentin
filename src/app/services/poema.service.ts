import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoemaService {
  private versosPorTema = {
    amor: [
      'Tu amor es mi obra maestra.',
      'Cada trazo refleja tu esencia.',
      'El arte de amarte es eterno.',
      'Junto a ti, cada paso es perfecto.',
      'El viento lleva nuestra historia de amor.',
      'Eres la pieza clave de mi vida.',
      'Bajo las estrellas, tú eres mi luz.',
      'Tu abrazo es mi refugio y mi hogar.',
      'Tus palabras son el arte que calma mi alma.',
      'Nuestro amor es un viaje sin fin.',
      'El tablero de la vida se llena de amor contigo.',
      'Tus ojos son mi mapa hacia el amor.',
      'Tu amor es la pintura que ilumina mi mundo.',
      'Tu amor es mi videojuego favorito.',
      'Bajo el cielo, tus palabras son mi paz.',
      'A tu lado, todo es un juego de amor.'
    ],
    arte: [
      'Tu risa es mi melodía diaria.',
      'Cada viaje es un cuadro pintado.',
      'La pintura cobra vida en tu mirada.',
      'Eres el pincel que da color a mi vida.',
      'Tus caricias son mi paleta de colores.',
      'Cada paso contigo es un cuadro en movimiento.',
      'Cada mirada tuya es un trazo de amor.',
      'El arte de amarte no tiene fin.',
      'Cada día contigo es una obra nueva.',
      'La creatividad fluye como un río contigo.',
      'Tu mirada es el lienzo donde pinto mis sueños.',
      'Cada instante contigo es una obra maestra.',
      'El arte de tu amor me inspira a vivir.',
      'Tu amor es mi mayor obra de arte.',
      'Tu alma es un cuadro pintado en mil colores.',
      'La magia de tu amor es mi mayor inspiración.'
    ],
    viajes: [
      'Cada día contigo es una obra nueva.',
      'Cada viaje contigo es un sueño hecho realidad.',
      'Nuestros viajes son historias por contar.',
      'Cada momento contigo es un nivel ganado.',
      'La vida a tu lado es el mejor viaje.',
      'Cada partida contigo es un recuerdo eterno.',
      'Cada ruta contigo es una nueva aventura.',
      'Cada viaje contigo es una nueva historia.',
      'El mundo es nuestro cuando viajamos juntos.',
      'Viajar contigo es mi mayor aventura.',
      'Cada paso contigo es un camino hacia el destino.',
      'Junto a ti, cada viaje es un descubrimiento.',
      'Nuestros viajes no tienen fin, sólo nuevas rutas.',
      'La vida es un viaje, y tú eres mi destino.',
      'Cada rincón del mundo tiene tu huella.',
      'Viajemos juntos, porque contigo es más hermoso.'
    ],
    juego: [
      'Jugar contigo es ganar el corazón.',
      'Eres mi videojuego favorito.',
      'Nuestro amor es un tablero ganado.',
      'En cada juego, siempre somos equipo.',
      'Jugar a tu lado es mi mejor aventura.',
      'En cada juego de mesa, siempre te elijo.',
      'Eres mi compañero en este juego llamado vida.',
      'Cada partida contigo es una victoria.',
      'Tu amor es mi juego favorito.',
      'En el juego de la vida, tú eres mi jugada perfecta.',
      'El amor es nuestro juego y siempre ganamos.',
      'Cada momento contigo es un punto ganado.',
      'Contigo, cada nivel se convierte en una alegría.',
      'Eres mi compañero de juego, mi compañero de vida.',
      'En cada turno, tu amor es mi mejor jugada.',
      'Nuestro amor es un juego lleno de diversión.'
    ],
    campamento: [
      'En el campamento, tu amor es el fuego.',
      'Cada rincón del campamento es nuestro.',
      'Cada rincón de nuestro campamento es un tesoro.',
      'Nuestro campamento es nuestro refugio.',
      'Bajo las estrellas, compartimos nuestras historias.',
      'Tu amor es la fogata que ilumina mi noche.',
      'El campamento es más especial porque estás tú.',
      'Cada mañana en el campamento es un nuevo amanecer.',
      'Contigo, cada campamento es un sueño hecho realidad.',
      'Bajo el cielo estrellado, nuestro amor crece.',
      'En el campamento, eres mi compañero de aventuras.',
      'Junto a ti, el campamento es mi lugar feliz.',
      'Cada rincón del campamento guarda nuestros secretos.',
      'El sonido de la naturaleza y tu voz son mi paz.',
      'El campamento es el lugar donde nuestras almas se conectan.',
      'En cada noche bajo el campamento, te siento más cerca.'
    ]
  };

  constructor() {}

  // Método para generar un poema con temática aleatoria
  obtenerPoema(): string {
    const temasDisponibles = Object.keys(this.versosPorTema);
    const temaAleatorio = temasDisponibles[Math.floor(Math.random() * temasDisponibles.length)];
    const versosSeleccionados = this.obtenerVersos(temaAleatorio, 4); // Selecciona 4 versos aleatorios
    return versosSeleccionados.join('\n');
  }

  // Método para obtener versos por tema
  private obtenerVersos(tema: string, cantidad: number): string[] {
    // Assert que 'tema' es una clave válida en 'versosPorTema'
    const versosDisponibles = this.versosPorTema[tema as keyof typeof this.versosPorTema];
    const versosSeleccionados: string[] = [];

    for (let i = 0; i < cantidad; i++) {
      const indexAleatorio = Math.floor(Math.random() * versosDisponibles.length);
      const versoAleatorio = versosDisponibles.splice(indexAleatorio, 1)[0];
      versosSeleccionados.push(versoAleatorio);
    }

    return versosSeleccionados;
  }
}
