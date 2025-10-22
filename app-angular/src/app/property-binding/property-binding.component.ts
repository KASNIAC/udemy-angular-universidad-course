import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  texto: string = ''

  actualizarTexto(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;

    this.texto = elementoInput.value;
  }

}
