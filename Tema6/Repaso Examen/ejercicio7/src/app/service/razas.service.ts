import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gatos } from '../models/models1';

@Injectable({
  providedIn: 'root',
})
export class RazasService {
  apiUrl = 'https://catfact.ninja/breeds';
  constructor(private http: HttpClient) {}
  getRazas() {
    return this.http.get<gatos>(this.apiUrl);
  }
}
