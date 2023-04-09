import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
@NgModule({
  declarations: [ // components feitos no sistema
    AppComponent,

  ],
  imports: [
    BrowserModule,  // para rodar no browser
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent] // app que inicializa a aplicacao
})
export class AppModule { }
