import { Injectable } from '@angular/core';
import { Fila } from './model/fila'

@Injectable({
  providedIn: 'root'
})
export class FilaService {

  filas: Fila[] = [
    { id: 1, nome: 'Telefonia' },
    { id: 2, nome: 'Redes' },
    { id: 3, nome: 'Computadores' },
  ];

  //adiciona no vetor
  adicionaFila(fila: Fila): void {
    this.filas.push(fila);
  }
  
  nextId(): number {
    //estrutura if this.filas.length <= 0 ? verdade : senão mapeia maior id e adiciona 1
    //this.filas.map (mapeia o id como um vetor faz for each)
    return this.filas.length <= 0 ? 1 : Math.max(...this.filas.map(fila => fila.id)) + 1;
  }

  getFila(): Fila[] {
    return this.filas;
  }

  getFilaPorId(idFila:Number):Fila{
    return this.filas.find(fila => fila.id==idFila);
  }

  constructor() { }
}
