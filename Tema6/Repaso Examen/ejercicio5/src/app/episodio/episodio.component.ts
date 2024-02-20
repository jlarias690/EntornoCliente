import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { results1 } from '../models/model1';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-episodio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './episodio.component.html',
  styleUrl: './episodio.component.css',
})
export class EpisodioComponent implements OnInit {
  episodio? = new Observable<results1>();
  constructor(private obtenerEpisodio: DatosService) {}
  ngOnInit(): void {
    this.episodio = this.obtenerEpisodio.getEpisodis();
  }
}
