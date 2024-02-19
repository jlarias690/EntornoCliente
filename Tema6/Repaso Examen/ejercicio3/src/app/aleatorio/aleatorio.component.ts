import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado, lista } from '../models/model';
import { AleatorioService } from '../service/aleatorio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aleatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css',
})
export class AleatorioComponent implements OnInit {
  constructor(private obtneAlgo: AleatorioService) {}
  datosObservable?: Observable<lista>;
  datosObservable2?: Observable<lista>;
  ngOnInit(): void {
    this.datosObservable = this.obtneAlgo.getdato();
    this.datosObservable2 = this.obtneAlgo.getdatos();
  }
}
