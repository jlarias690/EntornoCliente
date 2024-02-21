import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { meals } from '../modals/modal';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css',
})
export class RecetaComponent {
  boton: boolean = false;
  boton2: boolean = false;
  datosReceta?: Observable<meals>;
  constructor(private obtenerReceta: DatosService) {}

  mostrarReceta() {
    this.boton = true;
    this.datosReceta = this.obtenerReceta.getReceta();
  }
  mostrarInstrucciones() {
    this.boton2 = true;
  }
}
