import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';

const routes: Routes = [
  { path: '', component: HoroscopoComponent } // Definir la ruta del componente
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoroscopoRoutingModule { }
