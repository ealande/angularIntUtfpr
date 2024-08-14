import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../produto/model/produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  salvar(produto: Produto): Observable<Produto> {
    return this.httpClient.post('http://localhost:8080/api/produto', produto)
  }

  listar(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>('http://localhost:8080/api/produto');
  }

  buscarPorId(id: number | null): Observable<Produto> {
    return this.httpClient.get<Produto>(`http://localhost:8080/api/produto/${id}`);
  }
}
