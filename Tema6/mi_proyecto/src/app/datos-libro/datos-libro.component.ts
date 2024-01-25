import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-datos-libro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datos-libro.component.html',
  styleUrl: './datos-libro.component.css',
})
export class DatosLibroComponent {
  libro = {
    titulo: 'Amanecer Rojo',
    autor: 'Pirce',
    precio: 20,
    stock: 0,
    cantidad: 0,
    imagen: '../assets/kylo.jpg',
  };
  libro2 = {
    titulo: 'La Tortura de Angular',
    autor: 'Belen',
    precio: 20,
    stock: 0,
    cantidad: 0,
    imagen: '../assets/kylo.jpg',
  };
  libros: any[] = [this.libro, this.libro2];

  up() {
    this.libro.cantidad++;
  }
  down() {
    this.libro.cantidad--;
  }

  @Input()
  numLibro: string = '';

  @Output()
  selected = new EventEmitter<any>();

  devolverTitulo() {
    let numero: number = Number(this.numLibro);
    let tit;
    if (numero == 1 || numero == 2) {
      tit = this.libros[numero - 1].titulo;
    } else {
      tit = 'No existe ese libro';
    }
    this.selected.emit(tit);
  }
}
