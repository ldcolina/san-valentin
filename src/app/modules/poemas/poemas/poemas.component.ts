import { Component } from '@angular/core';
import { PoemaService } from '../../../services/poema.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-poemas',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './poemas.component.html',
  styleUrls: ['./poemas.component.css']
})
export class PoemasComponent {
  poema: string = '';

  constructor(private poemaService: PoemaService) {
    this.generarPoema();
  }

  generarPoema(): void {
    this.poema = this.poemaService.obtenerPoema();
  }
}
