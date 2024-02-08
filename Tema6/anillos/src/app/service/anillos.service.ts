import { Injectable } from '@angular/core';
import { Personaje } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  private personajes: Personaje[] = [
    { id: 1, nombre: 'Frodo', raza: 'Hobbit' },
    { id: 2, nombre: 'Gimli', raza: 'Enano' },
    { id: 3, nombre: 'Legolas', raza: 'Elfo' },
  ];

  getPersonajes(): Personaje[] {
    return this.personajes;
  }
  agregarPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }
  eliminarPersonaje(id: number): void {
    this.personajes = this.personajes.filter((p) => p.id !== id);
  }
  constructor() {}
}
