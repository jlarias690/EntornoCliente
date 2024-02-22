import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LikeComponent } from '../like/like.component';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule, FormsModule, LikeComponent],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent {
  checkResumen: boolean = false;
  botonOK: boolean = false;
  boton2OK: boolean = false;
  error: boolean = false;
  textArea: string = '';
  @Output()
  selected = new EventEmitter<any>();

  enviarDatos() {
    if (this.checkResumen != false) {
      this.selected.emit(this.checkResumen);
      this.botonOK = true;
    } else {
      this.error = true;
    }
  }
  enviarDatosTextArea() {
    this.selected.emit(this.textArea);
    this.boton2OK = true;
  }
}
