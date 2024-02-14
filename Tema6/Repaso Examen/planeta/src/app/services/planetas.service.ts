import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { atributosPlaneta, resultadoPlaneta } from '../model/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  private url:string = 'https://swapi.dev/api/planets'

  constructor(private http:HttpClient) { }

  getPlanets(){
    return this.http.get<resultadoPlaneta>(this.url+"?page=1");
  }

  getPlanet(){
    return this.http.get<atributosPlaneta>(this.url+"/1");
  }
}
