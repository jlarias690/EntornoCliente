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
  check2Marcardo: boolean = false;
  mostrarMensaje() {
    alert('He marcadado el checkbox');
    this.texto = 'Check pulsado';
  }
  texto: string = 'Antes de pulsar';
  marcado(event: any) {
    if (event.target.value == 'H') {
      this.texto = 'Pusado Hombre';
    } else {
      this.texto = 'Pulsado Mujer';
    }
  }
}
