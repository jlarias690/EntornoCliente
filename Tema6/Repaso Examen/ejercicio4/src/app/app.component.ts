import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { heroes } from './models/model';
import { DatosService } from './service/datos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Poderes';
  constructor(private obtenerHeroes: DatosService) {}
  datosHeroes? = new Observable<heroes>();

  ngOnInit(): void {
    this.datosHeroes = this.obtenerHeroes.getDato();
  }
}
