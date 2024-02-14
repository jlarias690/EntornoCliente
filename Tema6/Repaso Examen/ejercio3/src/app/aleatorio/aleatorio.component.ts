import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from '../model/model';
import { AleatorioService } from '../service/aleatorio.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aleatorio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css',
})
export class AleatorioComponent implements OnInit {
  data?: Observable<Datos[]>;
  constructor(private p: AleatorioService) {}

  ngOnInit() {
    this.data = this.p.getDato();
  }
}
