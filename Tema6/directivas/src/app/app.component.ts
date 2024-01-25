import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Alta Usuario';
  nombre: string = '';
  apellidos: string = '';
  mensaje: string = '';

  alta: boolean = false;
  registrar() {
    this.mensaje =
      'Alta correcta del usuario: ' + this.nombre + ' ' + this.apellidos;
    this.alta = true;
  }

  personas: Persona[] = [
    { nombre: 'Pepe', apellidos: 'Lopez', edad: 35 },
    { nombre: 'Rosa', apellidos: 'Lopez', edad: 18 },
  ];
}
