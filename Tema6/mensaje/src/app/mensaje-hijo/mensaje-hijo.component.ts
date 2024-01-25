import { Output, Input, Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-hijo.component.html',
  styleUrl: './mensaje-hijo.component.css',
})
export class MensajeHijoComponent {
  @Input() //Sirve para que obtener los datos que nos mandan la clase padre
  mensajeHijo: string = '';

  @Output()
  selected = new EventEmitter<any>();
  respuesta: string = '';
  enviarRespuesta() {
    this.selected.emit(this.respuesta);
  }
}
