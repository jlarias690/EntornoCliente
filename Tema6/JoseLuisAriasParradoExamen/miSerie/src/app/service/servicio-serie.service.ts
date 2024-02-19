import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datos } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ServicioSerieService {
  apiURl: string = 'https://api.tvmaze.com/shows/5';
  constructor(private http: HttpClient) {}
  getDato() {
    return this.http.get<datos>(this.apiURl);
  }
}
