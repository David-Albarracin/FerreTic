import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserGuard } from './user.guard'
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';



//Components 
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VentaComponent } from './components/venta/venta.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    InicioComponent,
    VentaComponent,
    ClienteComponent,
    ProveedoresComponent,
    ConfiguracionComponent,
    RegistroComponent,
    LoginComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
