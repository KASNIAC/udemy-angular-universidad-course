import { Injectable } from '@angular/core';

// El decorador @Injectable() marca a la clase como un servicio que puede ser inyectado en otros componentes o servicios. El parámetro providedIn: 'root' indica que este servicio estará disponible en toda la aplicación, lo que significa que Angular creará una única instancia de este servicio y la compartirá en toda la aplicación. Esto es útil para servicios que necesitan mantener un estado compartido o para servicios que se utilizan en múltiples componentes.
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string = 'Hola desde el servicio de Mensajes';

  constructor() { }

  obtenerMensaje(): string {
    return this.mensaje;
  }
}
