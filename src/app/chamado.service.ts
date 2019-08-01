import { Injectable } from '@angular/core';
import { Chamado } from './model/chamado';
import { Fila } from './model/fila';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
  chamados: Chamado[] = [
    {
      id: 1000,
      descricao: 'Telefone não funciona',
      status: 'aberto',
      dataAbertura: '2019-05-03',
      dataFechamento: null,
      descricaoFinalizacao: null,
      idFila: 1
    },
    {
      id: 1001,
      descricao: 'Telefone quebrado',
      status: 'fechado',
      dataAbertura: '2019-06-15',
      dataFechamento: '2019-06-16',
      descricaoFinalizacao: 'Telefone substituído',
      idFila: 1
    },
    {
      id: 1002,
      descricao: 'Laboratório sem cabeamento',
      status: 'fechado',
      dataAbertura: '2019-07-15',
      dataFechamento: '2019-07-16',
      descricaoFinalizacao: 'Telefone substituído',
      idFila: 2
    },
  ]
  
  getChamadosPorFila(fila: Fila): Chamado[] {
    //aplica filter e recebe outra colecao, avalia se chamado tem id da fila
    return this.chamados.filter(
      chamado => chamado.idFila == fila.id);
  }
  
  getChamados():Chamado[]{
    return this.chamados;
  }

  getChamadosPorId(idFila:number):Chamado[]{
    console.log(this.chamados.filter(chamado =>chamado.idFila==idFila));
    return this.chamados.filter(chamado =>chamado.idFila==idFila);
  }

  constructor() { }
}
