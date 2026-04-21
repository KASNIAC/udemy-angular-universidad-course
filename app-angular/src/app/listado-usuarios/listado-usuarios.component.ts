import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
  usuarios: any[] = [];

  constructor(private usuarioServices: UsuariosService) {}

  ngOnInit() {
    this.usuarioServices.obtenerDatos().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
