import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { facts } from '../models/models1';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  apiUrl = 'https://cat-fact.herokuapp.com/facts';
  constructor(private http: HttpClient) {}
  getTexto() {
    return this.http.get<facts[]>(this.apiUrl);
  }
}
