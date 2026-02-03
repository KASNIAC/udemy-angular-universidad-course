import { Component } from '@angular/core';
import { Formulario } from "../formulario/formulario";

@Component({
  selector: 'app-calculadora',
  imports: [Formulario],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  resultado: number = 0;

  procesarResultado(resultadoHijo: number) {
    this.resultado = resultadoHijo;
  }
}
