import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { SerieComponent } from './serie/serie.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'serie', component: SerieComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },
];
