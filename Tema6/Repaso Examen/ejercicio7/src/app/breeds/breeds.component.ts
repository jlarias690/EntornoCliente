import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { gatos } from '../models/models1';
import { RazasService } from '../service/razas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-breeds',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.css',
})
export class BreedsComponent implements OnInit {
  gatitos?: Observable<gatos>;
  constructor(private obtenerRazas: RazasService) {}
  ngOnInit(): void {
    this.gatitos = this.obtenerRazas.getRazas();
  }
}
