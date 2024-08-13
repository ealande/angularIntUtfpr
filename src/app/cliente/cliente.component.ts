import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cliente } from './model/cliente.model';
import { ClienteService } from '../services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public cliente: Cliente = new Cliente();

  public nome?: string;
  public email?: string;
  public loading: boolean = false;
  public mensagem?: string;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id !== null) {
        const numericId = +id;
        this.clienteService.buscarPorId(numericId).subscribe(cliente => {
          this.cliente = cliente;
          this.nome = cliente.nome;
          this.email = cliente.email;
        });
      }
    });
  }


  salvar(): void {
    this.mensagem = "";
    this.loading = true;
    this.cliente.nome = this.nome;
    this.cliente.email = this.email;

    this.clienteService.salvar(this.cliente).subscribe(
      cliente => {
        this.mensagem = `Cliente ${cliente.id} salvo com sucesso`;
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.error(error);
        this.mensagem = `Erro ao salvar cliente: ${error.message}`;
      }
    );
  }
}

