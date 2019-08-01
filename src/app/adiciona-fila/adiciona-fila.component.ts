import { Component, OnInit } from '@angular/core';
import { ConcatSource } from 'webpack-sources';
import { FilaService } from '../fila.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-adiciona-fila',
  templateUrl: './adiciona-fila.component.html',
  styleUrls: ['./adiciona-fila.component.scss']
})

export class AdicionaFilaComponent implements OnInit {

  nomeFila: String;
  
  constructor(
    private filaService: FilaService,
    private location: Location
  ) { }
  
  adicionaFila():void{
    if(this.nomeFila){
      alert("Fila Adicionada");
      //adiciona nova fila
      this.filaService.adicionaFila({nome: this.nomeFila,id:this.filaService.nextId()});
      this.location.back();
    }else{
      window.alert("Você deve preencher o nome da fila!");
    }
  }
  
  voltar():void{
    this.location.back();
 
  }
  ngOnInit() {
  }

}
