import { Component, OnInit } from '@angular/core';
//formgrou é um grupo de formcontrol _> ambos sao para forms
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adiciona-chamado',
  templateUrl: './adiciona-chamado.component.html',
  styleUrls: ['./adiciona-chamado.component.scss']
})
export class AdicionaChamadoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  onSubmit():void{
    console.log(this.chamadoForm.value)
  }

  chamadoForm = new FormGroup({
    //modelo da entrada do form
    descricaoChamado: new FormControl('')
  });

  voltar():void{
    this.location.back();
 
  }

  ngOnInit() {
  }

}
