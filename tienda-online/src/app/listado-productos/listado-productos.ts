import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.scss'
})
export class ListadoProductos {
  titulo = "Listado de productos";
  productos: Producto[] = [
    new Producto('Producto A', 100),
    new Producto('Producto B', 200),
    new Producto('Producto C', 300)
  ];

  descripcionInput: string = '';
  precioInput: number | null = null; // Puede ser tipo number o de tipo null

  agregarProducto(): void {
    // Validar que sean valores vacios
    if(this.descripcionInput.trim() == '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }
    
    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);

    // Limiamos los campos del formulario
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
