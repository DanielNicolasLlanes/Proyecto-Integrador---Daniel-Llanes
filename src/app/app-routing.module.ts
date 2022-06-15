import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importacion de los componentes creados por mi
import { HomeComponent } from 'src/app/componentes/home/home.component'
import { LoginComponent } from 'src/app/componentes/login/login.component'
//Creacion del array con las rutas de los componentes
const routes: Routes = [
 {path: '', component:HomeComponent},
 {path: 'login', component:LoginComponent}
];

//Importacion y exportacion del RouterMoudule para que tome las rutas dadas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
