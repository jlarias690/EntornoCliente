import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado, lista } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class AleatorioService {
  apiUrl = 'https://randomuser.me/api/';
  apiUrl2 = 'https://randomuser.me/api/?results=10';
  constructor(private http: HttpClient) {}

  getdato() {
    return this.http.get<lista>(this.apiUrl);
  }
  getdatos() {
    return this.http.get<lista>(this.apiUrl2);
  }
}
