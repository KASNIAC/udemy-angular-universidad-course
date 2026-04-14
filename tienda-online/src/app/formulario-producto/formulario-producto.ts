import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario-producto',
  imports: [],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.scss'
})
export class FormularioProducto {
  @ViewChild('descripcionInput') descripcionRef!: ElementRef;
  @ViewChild('precioInput') precioRef!: ElementRef;
  @Output() productoAgregado = new EventEmitter<Producto>();

  
  agregarProducto(evento: Event): void {
    evento.preventDefault(); // Evita que la página se recargue
    
    if(this.descripcionRef.nativeElement.value.trim() == '' || this.precioRef == null || this.precioRef.nativeElement.value.trim() <= 0) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    this.productoAgregado.emit(new Producto(this.descripcionRef.nativeElement.value, parseFloat(this.precioRef.nativeElement.value)));

    this.descripcionRef.nativeElement.value = '';
    this.precioRef.nativeElement.value = null;
  }
}
