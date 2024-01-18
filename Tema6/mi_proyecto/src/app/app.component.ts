import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoComponent } from './alumno/alumno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserProfileComponent, AlumnoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'mi_proyecto';
  name: string = 'Jose Luis';
  edad: number = 18;
  imgURL: string = '../assets/kylo.jpg';
  clase: string = 'naranja';
  marcado: boolean = true;
  deshabilitado: boolean = true;

  asignatura = {
    nombre: 'pepe',
    codigo: 1,
  };

  getEdad(): number {
    return this.edad;
  }
}
