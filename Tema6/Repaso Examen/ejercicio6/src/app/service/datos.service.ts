import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { meals } from '../modals/modal';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  constructor(private http: HttpClient) {}
  getReceta() {
    return this.http.get<meals>(this.apiUrl);
  }
}
