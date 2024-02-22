import { Component, EventEmitter, Output } from '@angular/core';
import { datos, results } from '../models/model';
import { Observable } from 'rxjs';
import { PeliculasService } from '../service/peliculas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ResumenComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
})
export class PeliculasComponent {
  tituloPelicula: string = '';
  obs?: Observable<results>;
  constructor(private obtenerPeliculas: PeliculasService) {}

  botonOK = false;

  mostrarPeliculas() {
    this.obs = this.obtenerPeliculas.getPeliculas();
    this.botonOK = true;
  }
}
