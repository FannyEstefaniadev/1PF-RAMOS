import { Component,ViewChild } from '@angular/core';
import { MatTable} from '@angular/material/table';


@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.css']
})
export class AbmDeAlumnosComponent {
  columnas: string[] = ['nombre', 'curso', 'email', 'borrar'];

  datos: Alumno[] = [
    new Alumno(1, 'Juan', 'Angular', 'juan@example.com'),
    new Alumno(2, 'María', 'Angular', 'maria@example.com'),
    new Alumno(3, 'Pedro', 'Angular', 'pedro@example.com'),
  ];

  alumnoSelect: Alumno = new Alumno(0, "", "", "");

  @ViewChild(MatTable) tabla1!: MatTable<Alumno>;

  borrarFila(cod: number) {
    if (confirm("¿Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Alumno(this.alumnoSelect.codigo, this.alumnoSelect.nombre, this.alumnoSelect.curso, this.alumnoSelect.email));
    this.tabla1.renderRows();
    this.alumnoSelect = new Alumno(0, "", "", "");
  }
}

export class Alumno {
  constructor(public codigo: number, public nombre: string, public curso: string, public email: string) {
  }
}








