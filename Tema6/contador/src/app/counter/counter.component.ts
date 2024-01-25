import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule, CounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  contador: number = 10;

  suma() {
    this.contador = this.contador + 1;
  }
  resetear() {
    this.contador = 10;
  }
  restar() {
    this.contador = this.contador - 1;
  }
}
