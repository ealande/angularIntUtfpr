import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto/produto.service';
import { Produto } from '../produto/model/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrl: './listar-produto.component.css'
})
export class ListarProdutoComponent implements OnInit {

  public produtos: Produto[] = [];

  public constructor(private produtoService: ProdutoService, private router: Router) {

  }

  ngOnInit() {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
    })
  }

  carregar(produto: Produto) {
    console.log(produto);
    this.router.navigate([`/produto/${produto.id}`]);
  }
}
