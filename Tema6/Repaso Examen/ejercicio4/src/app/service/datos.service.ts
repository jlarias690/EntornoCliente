import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { heroes } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  apiUrl =
    'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  constructor(private http: HttpClient) {}

  getDato() {
    return this.http.get<heroes>(this.apiUrl);
  }
}
