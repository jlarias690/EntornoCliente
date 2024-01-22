import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserProfileComponent,
    AlumnoComponent,
    FormsModule,
    DatosLibroComponent,
  ],
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
  companero: string = '';
  asignatura = {
    nombre: 'pepe',
    codigo: 1,
  };

  getEdad(): number {
    return this.edad;
  }
  nombreCompanero() {
    this.companero = 'Clara';
  }
  key: string = '';
  mostrar(event: any) {
    this.key += event.target.value + ',';
  }
  fraseCheck: string = '';
  mostrarMarcado(event: any) {
    if (event.target.checked) {
      this.fraseCheck = 'Esta Marcado';
    } else {
      this.fraseCheck = 'No esta Marcado';
    }
  }
  texto1: string = '';
  texto2: string = '';
  cambiarM(event: any) {
    this.texto2 = event.target.value.toUpperCase();
  }
  cambniarm(event: any) {
    this.texto1 = event.target.value.toLowerCase();
  }
  cambioColor: string = '';
  cambioColorFun(event: any) {
    this.cambioColor = event.target.value;
  }
}
