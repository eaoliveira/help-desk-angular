import { Component, OnInit, Input } from '@angular/core';
import { ChamadoService } from '../chamado.service';
import { Chamado } from '../model/chamado';
import { Fila } from '../model/fila';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FilaService } from '../fila.service';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.scss']
})

export class ChamadoComponent implements OnInit {
  //a tag app-chamados vai poder receber um parametro e enviar pra fila
  @Input() fila: Fila;
  chamados: Chamado[];
  idFila:number;
  filaAtual: Fila;

  constructor(
    public chamadoService: ChamadoService,
    public route: ActivatedRoute,
    private location: Location,
    private filaService:FilaService
  ) { }

  voltar():void{
    this.location.back();
  }
  
  ngOnInit() {
    //this.chamados = this.chamado.getChamados();
   // this.chamados=this.chamadoService.getChamadosPorFila(this.fila);

   
   const idFila = +this.route.snapshot.paramMap.get('idFila');
   console.log(idFila);
   this.chamados=this.chamadoService.getChamadosPorId(idFila);

   this.filaAtual=this.filaService.getFilaPorId(idFila);
  }

  //quando chamado, atualiza a chamada para ver chamados por fila
  atualizaFila(fila: Fila):void{
    this.fila=fila;
    this.chamados=this.chamadoService.getChamadosPorFila(this.fila);
  }
  

}
