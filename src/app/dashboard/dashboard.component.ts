import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showFiller = false;
  showAbmDeAlumnos = false;

  toggleAbmDeAlumnos() {
    this.showAbmDeAlumnos = !this.showAbmDeAlumnos;
  }
}
