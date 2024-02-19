import { Routes } from '@angular/router';
import { SerieComponent } from './serie/serie.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'serie', component: SerieComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'home', component: HomeComponent },
];
