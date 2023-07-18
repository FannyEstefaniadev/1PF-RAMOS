import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeAlumnosComponent } from './lista-de-alumnos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListaDeAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    ListaDeAlumnosComponent
  ],
})
export class ListaDeAlumnosModule {

 }
