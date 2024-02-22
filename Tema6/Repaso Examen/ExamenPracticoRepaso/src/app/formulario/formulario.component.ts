import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ResumenComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  serieFormulario: string = '';
  correoFormulario: string = '';
  nombreFormulario: string = '';
  botonOK: boolean = false;
  mostrar: boolean = false;
  mensajeError: boolean = false;
  errorValoracion: boolean = false;
  valoracionRecibida: string = '';
  @Output()
  selected = new EventEmitter<any>();

  enviarDatos() {
    if (this.correoFormulario != '' && this.correoFormulario != null) {
      this.botonOK = true;
      this.selected.emit(this.serieFormulario);
      this.selected.emit(this.correoFormulario);
      this.selected.emit(this.nombreFormulario);
    } else {
      this.mensajeError = true;
    }
  }
  enviarValoracion(valoracion: string) {
    if (valoracion != '' && valoracion != null) {
      this.valoracionRecibida = valoracion;
      this.mostrar = true;
    } else {
      this.errorValoracion = true;
    }
  }
}
