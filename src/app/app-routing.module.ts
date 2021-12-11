import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { VentaComponent } from './components/venta/venta.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UserGuard } from './user.guard'



const routes: Routes = [
  { path: '', 
    component: InicioComponent,
    canActivate: [UserGuard]
  },
  { path: 'ventas', 
    component: VentaComponent, 
    canActivate: [UserGuard] 
  },
  { path: 'clientes', 
    component: ClienteComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'productos',
    component: ListarProductosComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'editar-producto/:id',
    component: CrearProductoComponent,
    canActivate: [UserGuard]
  },
  { path: 'proveedores', 
    component: ProveedoresComponent,
    canActivate: [UserGuard] 
  },
  { path: 'configuracion', 
    component: ConfiguracionComponent,
    canActivate: [UserGuard] 
  },
  //{ path: 'public', component: PublicComponent },
  //{ path: 'private', component: PrivateComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
