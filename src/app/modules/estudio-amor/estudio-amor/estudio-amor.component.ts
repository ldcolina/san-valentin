import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-estudio-amor',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './estudio-amor.component.html',
  styleUrls: ['./estudio-amor.component.css']
})
export class EstudioAmorComponent {}
