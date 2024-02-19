import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { datos } from '../models/model';
import { ServicioSerieService } from '../service/servicio-serie.service';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css',
})
export class SerieComponent {
  data?: Observable<datos>;

  constructor(private datos: ServicioSerieService) {}
  getRecoge() {
    this.data = this.datos.getDato();
  }
}
