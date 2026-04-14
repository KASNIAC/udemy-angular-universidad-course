import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioProducto } from '../formulario-producto/formulario-producto';
import { ProductoComponent } from '../producto/producto';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, FormularioProducto, ProductoComponent],
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

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }
}
