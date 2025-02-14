import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poemas', loadChildren: () => import('./modules/poemas/poemas.module').then(m => m.PoemasModule) },
  { path: 'vales', loadChildren: () => import('./modules/vales/vales.module').then(m => m.ValesModule) },
  { path: 'estudio-amor', loadChildren: () => import('./modules/estudio-amor/estudio-amor.module').then(m => m.EstudioAmorModule) },
  { path: 'horoscopo', loadChildren: () => import('./modules/horoscopo/horoscopo.module').then(m => m.HoroscopoModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
