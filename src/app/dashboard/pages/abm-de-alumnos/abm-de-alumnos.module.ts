import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmDeAlumnosComponent } from './abm-de-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AbmDeAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule    
  ],
  exports: [AbmDeAlumnosComponent] 
})
export class AbmDeAlumnosModule {

 }
