import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serieList } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  apiUrl = 'https://api.tvmaze.com/shows/5';
  constructor(private http: HttpClient) {}

  getLista() {
    return this.http.get<serieList>(this.apiUrl);
  }
}
