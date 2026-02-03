import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.scss'
})
export class Producto {
  productos = [
    {"descripcion": "nuevo producto 1", "precio": "100"},
    {"descripcion": "nuevo producto 2", "precio": "200"},
    {"descripcion": "nuevo producto 3", "precio": "300"},
  ]
}
