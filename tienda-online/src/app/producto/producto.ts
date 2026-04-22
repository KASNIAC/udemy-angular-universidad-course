import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { ListadoProductosService } from '../listado-productos.service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.scss'
})
export class ProductoComponent {
  @Input() producto!: Producto;
  
  // productos = [
  //   {"descripcion": "nuevo producto 1", "precio": "100"},
  //   {"descripcion": "nuevo producto 2", "precio": "200"},
  //   {"descripcion": "nuevo producto 3", "precio": "300"},
  // ]

  constructor(private listadoProductosService: ListadoProductosService) {}

  emitirDetalleProducto(): void {
    this.listadoProductosService.detalleProductoEmitter.emit(this.producto);
  }
}
