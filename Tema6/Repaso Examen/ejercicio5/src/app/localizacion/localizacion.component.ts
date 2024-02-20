import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { results2 } from '../models/model2';
import { datos } from '../models/model';
import { DatosService } from '../service/datos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-localizacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.css',
})
export class LocalizacionComponent implements OnInit {
  localizacion?: Observable<results2>;
  constructor(private obtenerLocation: DatosService) {}
  ngOnInit(): void {
    this.localizacion = this.obtenerLocation.getLocation();
  }
}
