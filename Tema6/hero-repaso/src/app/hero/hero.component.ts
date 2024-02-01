import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  nombre: string = 'Ironman';
  edad: number = 25;

  edadDefecto() {
    this.edad = 18;
  }
  cambiarNombre() {
    this.nombre = 'Spiderman';
  }
}
