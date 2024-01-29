import { Component } from '@angular/core';
import { Articulo } from '../model/articulo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListadoArticulosComponent } from '../listado-articulos/listado-articulos.component';
import { CaracteristicasArticuloComponent } from '../caracteristicas-articulo/caracteristicas-articulo.component';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule, FormsModule, ListadoArticulosComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent {
  titulo = 'Lista Articulos';

  articulos: Articulo[] = [
    {
      nombre: 'Lapiz',
      precio: 0.65,
      unidades: 5,
    },
    {
      nombre: 'Cuadernos',
      precio: 2,
      unidades: 3,
    },
    {
      nombre: 'Tijeras',
      precio: 3.5,
      unidades: 2,
    },
  ];
  inputNombre: string = '';
  inputPrecio: number = 0;
  inputUnidades: number = 0;

  comprar() {
    let nuevoArticulo: Articulo = {
      nombre: this.inputNombre,
      precio: this.inputPrecio,
      unidades: this.inputUnidades,
    };

    this.articulos.push(nuevoArticulo);
  }
}
