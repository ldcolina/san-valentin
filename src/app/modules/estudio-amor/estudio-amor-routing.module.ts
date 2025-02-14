import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudioAmorComponent } from './estudio-amor/estudio-amor.component';

const routes: Routes = [
  { path: '', component: EstudioAmorComponent } // Definir la ruta del componente
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudioAmorRoutingModule { }
