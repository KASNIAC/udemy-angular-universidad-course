import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulamiento-propiedades',
  imports: [],
  templateUrl: './encapsulamiento-propiedades.component.html',
  styleUrl: './encapsulamiento-propiedades.component.css'
})
export class EncapsulamientoPropiedades {
  private titulo = 'Tipos de get';

  // Getter de Typescript
  get mostratTitulo() {
    return this.titulo;
  }

  getTitulo() {
    return this.titulo;
  }
}
