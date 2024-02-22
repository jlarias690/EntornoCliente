import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  nombre: string = 'Jose Luis';
  descripcion: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quo doloremque assumenda accusamus repellat tenetur fugiat maiores amet similique voluptas quasi modi architecto quam suscipit corrupti aspernatur molestiae, vero neque.';
}
