import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css',
})
export class RelojComponent {
  valor1: string = '0';
  valor2: string = '0';
  total: number = 0;

  sumar() {
    this.total = Number(this.valor1) + Number(this.valor2);
  }
  restar() {
    this.total = Number(this.valor1) - Number(this.valor2);
  }
  multiplicar() {
    this.total = Number(this.valor1) * Number(this.valor2);
  }
  dividir() {
    this.total = Number(this.valor1) / Number(this.valor2);
  }
}
