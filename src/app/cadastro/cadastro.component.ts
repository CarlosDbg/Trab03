import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(public dadosService: DadosService, private router: Router) { }

  titulo: string;
  imagem: string;
  valor:  number
  ngOnInit(): void {
  }

  formulario = new FormGroup({
    titulo: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
    //sobrenome: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    imagem: new FormControl(null, [Validators.required]),
    //email: new FormControl(null, [Validators.required, Validators.email]),
    valor:  new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    //receberNovidades: new FormControl(false)
  });

  esconderSenha = true;

  jsonDados: string;


  limpar() {
    this.jsonDados = null;


    /*
    this.nome.setValue(null);
    this.sobrenome.setValue(null);
    this.email.setValue(null);
    this.senha.setValue(null);
    this.receberNovidades.setValue(false);

    this.jsonDados = null;*/
  } 

  enviar() {

    if(this.formulario.invalid){
      return;
    }
    
    //const dados = this.formulario.value;

   // this.jsonDados = JSON.stringify(dados);

    this.dadosService.filmes.push(this.formulario.value);
    this.router.navigateByUrl('home');


   }
  
  }

