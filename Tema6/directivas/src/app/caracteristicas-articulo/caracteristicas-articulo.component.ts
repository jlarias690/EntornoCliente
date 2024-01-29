import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caracteristicas-articulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caracteristicas-articulo.component.html',
  styleUrl: './caracteristicas-articulo.component.css',
})
export class CaracteristicasArticuloComponent {
  @Output()
  selected = new EventEmitter<string>();
  anadir(valor: any) {
    this.selected.emit(valor);
  }
}
