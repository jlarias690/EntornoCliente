import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { facts } from '../models/models1';
import { FactsService } from '../service/facts.service';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.css',
})
export class FactsComponent implements OnInit {
  texto?: Observable<facts[]>;
  constructor(private obtenerTexto: FactsService) {}
  ngOnInit(): void {
    this.texto = this.obtenerTexto.getTexto();
  }
}
