import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente/cliente.service';
import { Cliente } from '../cliente/model/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent implements OnInit {
  public clientes: Cliente[] = [];

  public constructor(private clienteService: ClienteService, private router: Router) {

  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  carregar(cliente: Cliente) {
    console.log(cliente);
    this.router.navigate([`/cliente/${cliente.id}`]);
  }
}
