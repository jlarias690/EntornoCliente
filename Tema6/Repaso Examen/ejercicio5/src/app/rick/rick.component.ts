import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { results } from '../models/model';
import { DatosService } from '../service/datos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rick',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rick.component.html',
  styleUrl: './rick.component.css',
})
export class RickComponent {
  title: string = 'Personajes Rick Y Morti';
  mostrar: boolean = false;
  personajes? = new Observable<results>();
  constructor(private obtenerPersonaje: DatosService) {}
  mostrarPersonajes() {
    this.personajes = this.obtenerPersonaje.getPersonajes();
    this.mostrar = true;
  }
}
