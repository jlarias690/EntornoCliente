import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { razas } from '../models/models1';
import { RazaService } from '../service/raza.service';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [],
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.css',
})
export class BreedsComponent implements OnInit {
  obs?: Observable<razas>;
  constructor(private obtenerRazas: RazaService) {}
  ngOnInit(): void {
    this.obs = this.obtenerRazas.getRazas();
  }
}
