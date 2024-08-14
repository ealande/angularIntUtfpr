import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../cliente/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post('http://localhost:8080/api/cliente', cliente);
  }


  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>('http://localhost:8080/api/cliente');
  }

  buscarPorId(id: number | null): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`http://localhost:8080/api/cliente/${id}`);
  }
}
