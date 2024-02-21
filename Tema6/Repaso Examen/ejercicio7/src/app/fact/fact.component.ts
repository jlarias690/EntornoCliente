import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { fact } from '../models/models1';
import { FactService } from '../service/fact.service';

@Component({
  selector: 'app-fact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fact.component.html',
  styleUrl: './fact.component.css',
})
export class FactComponent {
  num: number = 0;
  frase?: Observable<fact>;
  constructor(private obtenerFrase: FactService) {}

  mostrarFrase() {
    this.frase = this.obtenerFrase.getFrase(this.num);
  }
}
