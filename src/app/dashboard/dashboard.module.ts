import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ListaDeAlumnosModule } from './pages/lista-de-alumnos/lista-de-alumnos.module';
import { MatListModule } from '@angular/material/list';
import { AbmDeAlumnosModule } from './pages/abm-de-alumnos/abm-de-alumnos.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, 
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ListaDeAlumnosModule,
    AbmDeAlumnosModule,
    MatListModule
   
  ],
  exports: [
    DashboardComponent
    
  ]
})

export class DashboardModule { }
