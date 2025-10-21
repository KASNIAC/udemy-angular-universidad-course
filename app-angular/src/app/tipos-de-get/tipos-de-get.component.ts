import { Component } from '@angular/core';

@Component({
  selector: 'app-tipos-de-get',
  imports: [],
  templateUrl: './tipos-de-get.component.html',
  styleUrl: './tipos-de-get.component.css'
})
export class HijoComponent {
  private titulo = 'Tipos de get';

  // Getter de Typescript
  get mostratTitulo() {
    return this.titulo;
  }

  getTitulo() {
    return this.titulo;
  }
}
