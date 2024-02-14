import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { resultadoPlaneta } from '../model/planet.model';
import { PlanetasService } from '../services/planetas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css'
})
export class PlanetListComponent {
  listaPlaneta = new Observable<resultadoPlaneta>();

  constructor(private servicio: PlanetasService){}

  ngOnInit(): void{
    this.listaPlaneta = this.servicio.getPlanets();
  }

}
