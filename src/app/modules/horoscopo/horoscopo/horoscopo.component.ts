import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-horoscopo',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})

export class HoroscopoComponent {
  novia = {
    nombre: 'Liz',
    fechaNacimiento: '01/09/1992',
  };

  novio = {
    nombre: 'Dany',
    fechaNacimiento: '30/12/1983',
  };
}
