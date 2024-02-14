import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { atributosPlaneta } from '../model/planet.model';
import { PlanetasService } from '../services/planetas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css'
})
export class PlanetDetailComponent {
  planeta = new Observable<atributosPlaneta>();
  constructor(private servicioPlaneta : PlanetasService){}
  ngOnInit(){
    this.planeta = this.servicioPlaneta.getPlanet();
  }
}
