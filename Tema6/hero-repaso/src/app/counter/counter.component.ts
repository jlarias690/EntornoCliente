import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 10;
  sumar() {
    this.counter = this.counter + 1;
  }
  resetear() {
    this.counter = this.counter = 10;
  }
  restar() {
    this.counter = this.counter - 1;
  }
}
