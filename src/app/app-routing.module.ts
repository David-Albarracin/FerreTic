import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

// componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import  { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
