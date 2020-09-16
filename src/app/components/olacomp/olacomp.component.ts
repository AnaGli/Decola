import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olacomp',
  templateUrl: './olacomp.component.html',
  styleUrls: ['./olacomp.component.css']
})
export class OlacompComponent implements OnInit {

  titulo:string= 'Meu primeiro componente.';
  dados:string;

  imgUrl: string = "/assets/img1.png";

  mostrarImagem = true

  constructor() { }

  ngOnInit(): void {
  }

executar(): void {

 this.dados = this.titulo;
}

}
