import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
})
export class AlumnoComponent {
  titulo: string = 'Componente Alumno';
  nombre: string = 'Jose Luis';
  apellido: string = 'Aria Parrado';
  edad: number = 21;
  dni: string = '45809095A';
  multi: number = this.edad * 5;
}
