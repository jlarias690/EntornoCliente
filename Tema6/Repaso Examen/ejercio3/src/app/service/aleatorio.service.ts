import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AleatorioService {
  apiUrl = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}
  getDato() {
    return this.http.get<Datos[]>(this.apiUrl);
  }
}
