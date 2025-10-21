import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
  <h1> {{tituloComponenteInline}}
    <p>
      componente-en-linea works!
    </p>
  `,
  styles: `
  h1 {
    color: blue;
  }`
})
export class ComponenteEnLineaComponent {
  tituloComponenteInline = 'Componente Inline';
}
