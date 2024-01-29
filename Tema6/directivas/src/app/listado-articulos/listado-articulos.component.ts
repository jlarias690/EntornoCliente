import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaracteristicasArticuloComponent } from '../caracteristicas-articulo/caracteristicas-articulo.component';

@Component({
  selector: 'app-listado-articulos',
  standalone: true,
  imports: [CommonModule, FormsModule, CaracteristicasArticuloComponent],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css',
})
export class ListadoArticulosComponent {
  @Input()
  articuloIndividual: any;

  @Input()
  indice: any;

  arrayCaracteristica = [''];
  agregarCaracteristicas(nuevo: string) {
    this.arrayCaracteristica.push(nuevo);
  }
}
