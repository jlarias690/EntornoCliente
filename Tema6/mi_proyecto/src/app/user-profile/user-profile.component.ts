import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name: string = 'Jose Luis Arias Parrado';
  role: string = '(Administrador);';
  titulo: string = 'Componente User';
}
