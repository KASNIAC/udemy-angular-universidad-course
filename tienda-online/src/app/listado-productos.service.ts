import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ListadoProductosService {
  productos: Producto[] = [
    new Producto('Producto A', 100),
    new Producto('Producto B', 200),
    new Producto('Producto C', 300)
  ];

  detalleProductoEmitter = new EventEmitter<Producto>();

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }
}
