import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValeService {
  private vales: string[] = [
    "Vale por un beso romántico 💋",
    "Vale por una cena a la luz de las velas 🍷",
    "Vale por una maratón de películas románticas 🎬",
    "Vale por un abrazo cálido y tierno 🤗",
    "Vale por una tarde de juegos de mesa juntos 🎲",
    "Vale por una caminata bajo las estrellas 🌟",
    "Vale por un masaje relajante para ti 💆‍♀️",
    "Vale por un desayuno en la cama para dos 🥞",
    "Vale por un picnic en el parque juntos 🍓",
    "Vale por una noche de karaoke en pareja 🎤",
    "Vale por un maratón de videojuegos en pareja 🕹️",
    "Vale por una tarde de pintura juntos 🎨",
    "Vale por una sorpresa romántica preparada por mí 🌹",
    "Vale por un día sin estrés, solo tú y yo 🧘‍♂️",
    "Vale por un helado en tu lugar favorito 🍦",
    "Vale por un día de aventuras al aire libre juntos ⛺",
    "Vale por una cita sorpresa planeada por mí 🎉",
    "Vale por una tarde de juegos de mesa en pareja 🃏",
    "Vale por una noche de estrellas en el campo 🌌",
    "Vale por un día de spa en casa para ambos 🛁",
    "Vale por una tarde de lectura tranquila juntos 📚",
    "Vale por una noche de juegos de mesa con snacks 🎮",
    "Vale por una visita a un museo o galería de arte juntos 🖼️",
    "Vale por un paseo en bicicleta por la ciudad 🚴‍♀️",
    "Vale por un día de cocina juntos 🍽️",
    "Vale por una maratón de series o películas en el sofá 📺",
    "Vale por una tarde de jardinería en pareja 🌱",
    "Vale por un café y charla en tu lugar favorito ☕",
    "Vale por una noche de juegos de mesa para dos 🧩",
    "Vale por un picnic romántico en la playa 🏖️",
    "Vale por un viaje sorpresa a algún lugar cercano ✈️",
    "Vale por una tarde en un parque de diversiones 🎢",
    "Vale por una noche de baile en casa 💃",
    "Vale por una caminata romántica por la naturaleza 🌿",
    "Vale por un viaje sorpresa que preparemos juntos 🎁",
    "Vale por una noche de lectura a la luz de las velas 🕯️",
    "Vale por un día de fotos juntos en un lugar bonito 📸",
    "Vale por una clase de cocina o taller juntos 🍴",
    "Vale por una experiencia de escape room juntos 🗝️",
    "Vale por un día en un parque temático de pareja 🎠",
    "Vale por una tarde de videojuegos retro juntos 🎮",
    "Vale por una noche de juegos en pareja con amigos 🃏",
    "Vale por un día de exploración en la ciudad juntos 🌆",
    "Vale por una noche de cine en casa con palomitas 🍿",
    "Vale por un paseo por la ciudad en pareja 🚶‍♂️",
    "Vale por una visita a un parque zoológico 🦁",
    "Vale por un picnic en la montaña 🏞️",
    "Vale por una tarde de juegos con amigos y pareja 🎉",
    "Vale por una noche de relajación y tranquilidad juntos 🌙",
    "Vale por un día de disfrute juntos sin interrupciones 📵",
    "Vale por un día de aventura al aire libre con actividad sorpresa 🚵‍♀️",
    "Vale por cualquier actividad que desees realizar. Esta actividad está sujeta a términos y condiciones que se compartirán antes de la ejecución de la misma. 📜"
  ];
  

  // Método para obtener un vale aleatorio
  obtenerVale(): string {
    const indice = Math.floor(Math.random() * this.vales.length);
    return this.vales[indice];
  }
}
