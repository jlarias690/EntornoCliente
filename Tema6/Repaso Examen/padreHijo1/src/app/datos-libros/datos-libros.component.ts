import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-datos-libros',
  standalone: true,
  imports: [CommonModule, FormsModule, ResumenComponent],
  templateUrl: './datos-libros.component.html',
  styleUrl: './datos-libros.component.css',
})
export class DatosLibrosComponent {
  tituloDatos: string = '';
  editorialDatos: string = '';
  autorDatos: string = '';
  BotonOK: boolean = false;
  valoracionRecibida: string = '';

  @Output()
  selected = new EventEmitter<any>();

  enviarDatos() {
    this.BotonOK = true;
    this.selected.emit(this.tituloDatos);
    this.selected.emit(this.editorialDatos);
    this.selected.emit(this.autorDatos);
  }
  enviarValoracion(valoracion: string) {
    this.valoracionRecibida = valoracion;
  }
}
