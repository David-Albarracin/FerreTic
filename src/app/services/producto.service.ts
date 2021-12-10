import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'https://ferretic.herokuapp.com/api/productos/';
  //url = 'http://localhost:8080/api/productos/';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarProducto(id:string, producto: Producto):Observable<any>{
    return this.http.put(this.url + id, producto);
  }
}
