import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IngresarNotasComponent } from './ingresar-notas/ingresar-notas.component';
import { EditarNotasComponent } from './editar-notas/editar-notas.component';
import { MisNotasComponent } from './mis-notas/mis-notas.component';
import { ImprimirComponent } from './imprimir/imprimir.component';
import { MainComponent } from './main/main.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
    { 
        path: 'app', 
        component: MainComponent,
        children : [
            { path: '', component: HomeComponent },
            { path: 'ingresar', component: IngresarNotasComponent },
            { path: 'cambiar-nota', component: EditarNotasComponent },
            { path: 'mis-notas', component: MisNotasComponent },
            { path: 'imprimir', component: ImprimirComponent },
            { path: 'informacion', component: InformacionComponent },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }