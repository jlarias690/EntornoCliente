import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MensajeHijoComponent } from './mensaje-hijo/mensaje-hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MensajeHijoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Mensaje Padre';
  mensajePadre: string = '';
  respuestaHijo = '';

  mostrarRespuesta(cadena: string) {
    this.respuestaHijo = cadena;
  }
}
