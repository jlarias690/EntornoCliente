import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RickComponent } from './rick/rick.component';
import { EpisodioComponent } from './episodio/episodio.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rick', component: RickComponent },
  { path: 'episodio', component: EpisodioComponent },
  { path: 'localizacion', component: LocalizacionComponent },
  { path: '**', component: HomeComponent },
];
