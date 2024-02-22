import { Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ResumenComponent } from './resumen/resumen.component';

export const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'pelicula', component: PeliculasComponent },
  { path: 'resumen/:title', component: ResumenComponent },
];
