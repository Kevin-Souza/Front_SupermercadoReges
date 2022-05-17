import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrmClienteComponent } from './frm-cliente/frm-cliente.component';
import { LstClienteComponent } from './lst-cliente/lst-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrmClienteComponent,
    LstClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
