import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
      // Decorador @Input()
  // mensajePadre: string = 'Mensaje desde el componente padre';


      // Decorador @Output()
  // mensaje: string = '';
  // // Se emitió una cadena (string), es lo que vamos a recibir del componente hijo
  // recibirNotificacion(mensajeHijo: string) {
  //   this.mensaje = mensajeHijo;
  // }


      // Decorador @ViewChild()
    @ViewChild(HijoComponent) hijoComponent!: HijoComponent;
    cambiarMensajeHijo() {
      this.hijoComponent.cambiarMensaje('Nuevo mensaje desde el componente padre');
    }
}
