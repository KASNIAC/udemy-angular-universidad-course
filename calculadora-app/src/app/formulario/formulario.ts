import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  operandoA: number | null = null;
  operandoB: number | null = null;

  @Output() resultadoSuma = new EventEmitter<number>();
  // @Input() resultadoHijo!: number;
  
  sumar() {
    if(this.operandoA && this.operandoB) {
      const resultado = this.operandoA + this.operandoB;
      this.resultadoSuma.emit(resultado);
    } else {
      console.log('Deben introducir valores correctos')
    }
  }
}
