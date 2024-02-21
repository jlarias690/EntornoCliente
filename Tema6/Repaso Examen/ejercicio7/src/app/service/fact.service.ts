import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fact } from '../models/models1';

@Injectable({
  providedIn: 'root',
})
export class FactService {
  apiUrl = 'https://catfact.ninja/fact?max_length';
  constructor(private http: HttpClient) {}
  getFrase(num: number) {
    return this.http.get<fact>(this.apiUrl + '=' + num);
  }
}
