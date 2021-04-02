import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescargaTarjetaComponent } from './descarga-tarjeta/descarga-tarjeta.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DescargaTarjetaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DescargaTarjetaComponent
  ]
})
export class PublicModule { }
