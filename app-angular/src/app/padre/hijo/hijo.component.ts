import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
      // Decorador @Input()
  // ! operador non-null assertion
  // confie en que esta propiedad va a ser inicializada posteriormente
  // @Input() mensaje!: string


      // Decorador @Output()
  // @Output() notificarPadre = new EventEmitter<string>();
  // enviarMensaje() {
  //   // Emitir el evento con un mensaje (se emite una cadena string)
  //   this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  // }


      // Decorador @ViewChild()
  mensaje: string = 'Mensaje desde el componente hijo al padre';

  cambiarMensaje(nuevoMensaje: string) {
    this.mensaje = nuevoMensaje;
  }
}
