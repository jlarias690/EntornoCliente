import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css',
})
export class LikeComponent {
  @Input()
  likeResumen: boolean = false;
  @Input()
  likeTextArea: string = '';
}
