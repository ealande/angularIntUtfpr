import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  public nome?: string;
  public quantidade?: number;

  salvar() {
    console.log(this.nome);
    console.log(this.quantidade);
  }
}
