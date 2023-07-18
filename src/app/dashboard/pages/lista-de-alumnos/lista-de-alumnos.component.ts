import { Component } from '@angular/core';

export interface Person {
  name: string;
 
}

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent {
  messages: Person[] = [
    { name: 'Juan' },
    { name: 'María' },
    { name: 'Carlos' },
    { name: 'Juan' },
    { name: 'María' },
    { name: 'Carlos' },
  ]; // Inicialización con un arreglo vacío

 
 
  constructor() {
    // Puedes realizar alguna lógica adicional en el constructor si es necesario
    // Pero asegúrate de que la propiedad 'messages' esté inicializada aquí.
  }
}
