import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // ! operador non-null assertion
  // confie en que esta propiedad va a ser inicializada posteriormente
  // @Input() mensaje!: string



  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    // Emitir el evento conun mensaje (se emite una cadena string)
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }
}
