import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import  { InicioComponent } from './components/inicio/inicio.component';
import  { VentaComponent } from './components/venta/venta.component';
import  { ClienteComponent } from './components/cliente/cliente.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import  { ProveedoresComponent } from './components/proveedores/proveedores.component';
import  { ConfiguracionComponent } from './components/configuracion/configuracion.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ventas', component: VentaComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
