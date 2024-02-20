import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { results } from '../models/model';
import { results1 } from '../models/model1';
import { results2 } from '../models/model2';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  apiUrl = 'https://rickandmortyapi.com/api/character/';
  apiUrl1 = 'https://rickandmortyapi.com/api/episode';
  apiUrl2 = 'https://rickandmortyapi.com/api/location';
  constructor(private http: HttpClient) {}

  getPersonajes() {
    return this.http.get<results>(this.apiUrl);
  }
  getEpisodis() {
    return this.http.get<results1>(this.apiUrl1);
  }

  getLocation() {
    return this.http.get<results2>(this.apiUrl2);
  }
}
