import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { data } from '../models/model';
import { SerieService } from '../service/serie.service';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css',
})
export class SerieComponent implements OnInit {
  observa?: Observable<data>;
  constructor(private obtenerSerie: SerieService) {}
  ngOnInit() {
    this.observa = this.obtenerSerie.getSerie();
  }
}
