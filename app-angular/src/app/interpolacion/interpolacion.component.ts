import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Universidad Angular';
  usuario = {
    nombre: 'Oscar Alexis',
    edad: 25
  };

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}
