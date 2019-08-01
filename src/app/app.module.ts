import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
    //importado para usar form
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FilasComponent } from './filas/filas.component';
import { AdicionaFilaComponent } from './adiciona-fila/adiciona-fila.component';
import { AppRoutingModule } from './app-routing.module';
import { ChamadoComponent } from './chamado/chamado.component';
import { AdicionaChamadoComponent } from './adiciona-chamado/adiciona-chamado.component';

@NgModule({
  declarations: [
    AppComponent,
    FilasComponent,
    AdicionaFilaComponent,
    ChamadoComponent,
    AdicionaChamadoComponent
  ],
  imports: [
    BrowserModule,
    //importado para usar form
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
