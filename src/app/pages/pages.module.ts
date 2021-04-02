import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IngresarNotasComponent } from './ingresar-notas/ingresar-notas.component';
import { EditarNotasComponent } from './editar-notas/editar-notas.component';
import { MisNotasComponent } from './mis-notas/mis-notas.component';
import { ImprimirComponent } from './imprimir/imprimir.component';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '../layout/layout.module';
import { Router, RouterModule } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    IngresarNotasComponent,
    EditarNotasComponent,
    MisNotasComponent,
    ImprimirComponent,
    MainComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
