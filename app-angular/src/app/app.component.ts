import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { EncapsulamientoPropiedades } from './encapsulamiento-propiedades/encapsulamiento-propiedades.component';
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { LocalReferenceComponent } from "./local-reference/local-reference.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent, EncapsulamientoPropiedades, EventBindingComponent, PropertyBindingComponent, TwoWayBindingComponent, ComponenteIfComponent, LocalReferenceComponent, ComponenteForComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Indice del Curso';
}
