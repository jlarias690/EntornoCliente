import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datos, razas } from '../models/models1';

@Injectable({
  providedIn: 'root',
})
export class RazaService {
  apiUrl = 'https://catfact.ninja/breeds';
  constructor(private http: HttpClient) {}
  getRazas() {
    return this.http.get<razas>(this.apiUrl);
  }
}
