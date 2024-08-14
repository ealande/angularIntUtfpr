import { Component, OnInit } from '@angular/core';
import { Produto } from './/model/produto.model';
import { ProdutoService } from '../services/produto/produto.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})

export class ProdutoComponent implements OnInit {
  public produto: Produto = new Produto;

  public nome?: string;
  public quantidade?: number;
  public loading: boolean = false;
  public mensagem?: string;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id !== null) {
        const numericId = +id;
        this.produtoService.buscarPorId(numericId).subscribe(produto => {
          this.produto = produto;
          this.nome = produto.nome;
          this.quantidade = produto.quantidade;
        });
      }
    });
  }



  salvar() {
    this.mensagem = "";
    this.loading = true;
    this.produto.nome = this.nome;
    this.produto.quantidade = this.quantidade;

    this.produtoService.salvar(this.produto).subscribe(
      produto => {
        this.mensagem = `Produto ${produto.id} salvo com sucesso!`;
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.error(error);
        this.mensagem = `Erro ao salvar produto: ${error.menssage}`;
      }
    )
  }
}
