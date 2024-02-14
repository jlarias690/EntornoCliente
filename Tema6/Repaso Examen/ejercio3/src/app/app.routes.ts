import { Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';

export const routes: Routes = [
  { path: 'tabla', component: TablaComponent },
  { path: 'aleatorio', component: AleatorioComponent },
];
