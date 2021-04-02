import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DescargaTarjetaComponent } from '../public/descarga-tarjeta/descarga-tarjeta.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'mis-notas', component: DescargaTarjetaComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }