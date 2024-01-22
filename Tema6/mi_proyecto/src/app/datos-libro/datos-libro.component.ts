import { Component } from '@angular/core';
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

  up() {
    this.libro.cantidad++;
  }
  down() {
    this.libro.cantidad--;
  }
}
