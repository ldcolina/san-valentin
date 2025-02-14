import { Component } from '@angular/core';
import { ValeService } from '../../../services/vale.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-vale',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './vales.component.html',
  styleUrls: ['./vales.component.css'],
  animations: [
    trigger('rasparAnimation', [
      state('oculto', style({
        background: 'linear-gradient(to bottom,rgba(255, 0, 0, 0.48),rgba(255, 0, 0, 0.52))',  // Color simulando la capa para raspar
        color: 'transparent',  // El texto es invisible al principio
        transform: 'translateY(0)',
      })),
      state('visible', style({
        background: 'transparent',  // Sin capa
        color: 'black',  // El texto es visible
        transform: 'translateY(-5px)',  // Ligeramente levantado
      })),
      transition('oculto => visible', [
        animate('1s ease-out')  // Animación suave al mostrar el texto
      ])
    ])
  ]
})
export class ValesComponent {
  valeActual: string = "💌";  // Mensaje predeterminado
  valeState: string = 'oculto';
  valeRaspado: boolean = false;  // Variable para comprobar si ya se ha raspado

  constructor(private valeService: ValeService) {}

  generarVale() {
    // Vuelve al estado oculto al presionar el botón para simular el raspado
    this.valeState = 'oculto';
    this.valeActual = "💌";  // Restablece el mensaje antes de mostrar el nuevo vale

    // Después de un corto tiempo, cambia el estado a 'visible' para mostrar el vale
    setTimeout(() => {
      this.valeActual = this.valeService.obtenerVale();  // Obtén un nuevo vale
      this.valeState = 'visible';  // Inicia la animación de raspar (mostrar el vale)
    }, 200);  // Retraso para iniciar la animación de raspar
  }
}
