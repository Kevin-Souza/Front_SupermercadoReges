import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmClienteComponent } from './frm-cliente/frm-cliente.component';
import { HomeComponent } from './home/home.component';
import { LstClientesComponent } from './lst-cliente/lst-cliente.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"clientes", component: LstClientesComponent},
  {path:"cliente/:id", component: FrmClienteComponent},
  {path:"cliente", component: FrmClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
