import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatosLibrosComponent } from './datos-libros/datos-libros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatosLibrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'padreHijo1';
}
