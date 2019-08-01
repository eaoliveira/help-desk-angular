import { Component, OnInit, ViewChild } from '@angular/core';
import { Fila } from '../model/fila';
import { FilaService } from '../fila.service';
import { ChamadoComponent } from '../chamado/chamado.component';
import { Chamado } from '../model/chamado';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.scss']
})


export class FilasComponent implements OnInit {

  //avisa as tags childres (no caso chamados), consegue chamar
  @ViewChild (ChamadoComponent, {static:false}) chamadoComponent:ChamadoComponent;

  filasLista: Fila[];

  filaSelecionada: Fila;
    
  //quando selecionado um item da fila, chama a função que atualiza os componentes
  onSelectFila(fila: Fila){
    this.filaSelecionada=fila;
    if(this.chamadoComponent){
      this.chamadoComponent.atualizaFila(fila);
    }
  }

  adicionarFila(): void {
    console.log("Teste");

  }
  constructor(
    //especifica a dependenciado FilaService, que carrega a fila
    public filaService: FilaService,
  ) { }

  ngOnInit() {
    this.filasLista = this.filaService.getFila();
  }
}
