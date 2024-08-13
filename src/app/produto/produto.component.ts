import { Component } from '@angular/core';
import { Produto } from '../cliente/produto/model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})

export class ProdutoComponent {
  public produto: Produto = new Produto;

  public nome?: string;
  public quantidade?: number;

  salvar() {
    console.log(this.nome);
    console.log(this.quantidade);
  }
}
