import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioProducto } from '../formulario-producto/formulario-producto';
import { ProductoComponent } from '../producto/producto';
import { ListadoProductosService } from '../listado-productos.service';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, FormularioProducto, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.scss'
})
export class ListadoProductos {
  titulo = "Listado de productos";
  // productos: Producto[] = [
  //   new Producto('Producto A', 100),
  //   new Producto('Producto B', 200),
  //   new Producto('Producto C', 300)
  // ];

  // agregarProducto(producto: Producto): void {
  //   this.productos.push(producto);
  // }

  productos: Producto[] = [];

  constructor(public listadoProductosService: ListadoProductosService) {
    this.listadoProductosService.detalleProductoEmitter.subscribe((producto: Producto) => {
      alert(`Detalle del producto: ${producto.descripcion}, Precio: $${producto.precio}`)
    });
  }

  ngOnInit() {
    this.productos = this.listadoProductosService.productos;
  }

  agregarProducto(producto: Producto): void {
    this.listadoProductosService.agregarProducto(producto);
  }


}
