import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  public nome?: string;
  public email?: string;

  salvar() {
    console.log(this.nome);
    console.log(this.email);
  }
}
