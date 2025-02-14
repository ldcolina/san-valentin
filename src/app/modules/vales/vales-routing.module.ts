import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValesComponent } from './vales/vales.component';

const routes: Routes = [
  { path: '', component: ValesComponent } // Definir la ruta del componente
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValesRoutingModule { }
