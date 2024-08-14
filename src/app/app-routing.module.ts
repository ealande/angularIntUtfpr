import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'listar-produto', component: ListarProdutoComponent },
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'listar-cliente', component: ListarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
