import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heroes = [
    {
      nombre: 'SuperMan',
      edad: 500,
    },

    {
      nombre: 'Flash',
      edad: 21,
    },

    {
      nombre: 'BatMan',
      edad: 35,
    },
  ];
  heroeBorrado: heroes = {
    this.nombre
  };
  borrarUltimoHeroes() {
    if (this.heroes.length > 0) {
      this.heroeBorrado = this.heroes.pop();
    }
  }
}
