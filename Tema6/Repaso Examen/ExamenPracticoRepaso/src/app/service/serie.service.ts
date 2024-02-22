import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  apiUrl = 'https://api.tvmaze.com/shows/5';
  constructor(private http: HttpClient) {}
  getSerie() {
    return this.http.get<data>(this.apiUrl);
  }
}
