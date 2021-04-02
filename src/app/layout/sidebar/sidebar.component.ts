import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  
  public sidebarElements = [
    //{ route: './', icon: 'fas fa-home', title: 'Inicio' },
    { route: './ingresar', icon: 'fas fa-plus', title: 'Ingresar Notas' },
    { route: './mis-notas', icon: 'fas fa-archive', title: 'Mis Notas' },
    { route: './cambiar-nota', icon: 'fas fa-marker', title: 'Cambiar Nota' },
    { route: './imprimir', icon: 'fas fa-print', title: 'Imprimir Tarjetas' },
    { route: './informacion', icon: 'fas fa-question-circle', title: 'Información' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
