import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private url = 'http://localhost:8080/api/user/';
  private url = 'https://ferretic.herokuapp.com/api/user/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registrarUsuario(usuario: User) {
    return this.http.post<any>(this.url + '/registro', usuario);
  }

  login(usuario: User) {
    return this.http.post<any>(this.url + '/login', usuario);
  }

  logeedIn() {
    //valida si el token existe en el localestore
    return !!localStorage.getItem('token');
  }

  getToken() {
    //obtiene el token existe en el localestore
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}