import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datos, results } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  apiUrl = 'https://swapi.dev/api/films';
  constructor(private http: HttpClient) {}
  getPeliculas() {
    return this.http.get<results>(this.apiUrl);
  }
}
