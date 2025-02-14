import { Component } from '@angular/core';
import { ValeService } from '../../../services/vale.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-vale',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './vales.component.html',
  styleUrls: ['./vales.component.css']
})
export class ValesComponent {
  valeActual: string = "Raspa para ver tu vale 💌";

  constructor(private valeService: ValeService) {}

  generarVale() {
    this.valeActual = this.valeService.obtenerVale();
  }
}
