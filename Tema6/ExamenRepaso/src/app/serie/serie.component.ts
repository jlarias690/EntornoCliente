import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { serieList } from '../models/models';
import { DatosService } from '../service/datos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css',
})
export class SerieComponent implements OnInit {
  series?: Observable<serieList>;
  constructor(private obtener: DatosService) {}
  ngOnInit() {
    this.series = this.obtener.getLista();
  }
}
