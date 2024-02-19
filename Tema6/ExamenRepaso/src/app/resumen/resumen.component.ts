import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent {
  @Input()
  seriePadre: string = '';
  @Input()
  correoPadre: string = '';
  @Input()
  nombrePadre: string = '';
  @Input()
  valoracion: string = '';
  @Output()
  selected = new EventEmitter<any>();

  mensaje: boolean = false;

  enviarValoracion() {
    if (this.valoracion != '' && this.valoracion != null) {
      this.selected.emit(this.valoracion);
    } else {
      this.mensaje = true;
    }
  }
}
