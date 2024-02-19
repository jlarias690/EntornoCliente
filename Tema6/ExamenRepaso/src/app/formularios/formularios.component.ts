import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { ResumenComponent } from '../resumen/resumen.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule, ResumenComponent, FormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css',
})
export class FormulariosComponent {
  serieHijo: string = '';
  correoHijo: string = '';
  nombreHijo: string = '';
  botonOk: boolean = false;
  mensajeError: boolean = false;
  valoracionRecibida: string = '';
  rojo: string = 'rojo';
  mostrar: boolean = false;

  @Output()
  selected = new EventEmitter<any>();
  mostrarDatos() {
    if (this.correoHijo != '' && this.correoHijo != null) {
      this.botonOk = true;
      this.selected.emit(this.nombreHijo);
      this.selected.emit(this.correoHijo);
      this.selected.emit(this.serieHijo);
    } else {
      this.mensajeError = true;
    }
  }
  mostrarRespuesta(mensaje: string) {
    this.valoracionRecibida = mensaje;
    this.mostrar = true;
  }
}
