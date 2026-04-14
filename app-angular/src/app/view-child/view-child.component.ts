import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('referenciaInput') inputElement!: ElementRef;

  cambiarTexto() {
    // Se podría hacer usando twoWayBinding, pero aquí se muestra cómo acceder directamente al elemento del DOM usando ViewChild y cambiar su valor.
    this.inputElement.nativeElement.value = 'Texto cambiado desde el componente';
  }
}
