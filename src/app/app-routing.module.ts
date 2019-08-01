import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AdicionaFilaComponent } from './adiciona-fila/adiciona-fila.component';
import { FilasComponent } from './filas/filas.component';
import { ChamadoComponent } from './chamado/chamado.component';
import { AdicionaChamadoComponent } from './adiciona-chamado/adiciona-chamado.component';

const routes: Routes = [
  { path: 'adicionafila', component: AdicionaFilaComponent },
  { path: 'filas', component: FilasComponent },
  //modulo pra redirecionar 4200 pra filas como pagina inicial
  { path: '', redirectTo:'/filas', pathMatch:'full' },
  {path:'chamado/:idFila', component:ChamadoComponent},
  {path:'chamado/:idFila/adicionaChamado', component:AdicionaChamadoComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
