import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = {
    username: '',
    password: '',
    nombre: ''
  }

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  registrarse() {
    //console.log(this.user);
    this.userService.registrarUsuario(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/productos']);
        },
        err => console.log(err)
      )
  }
}
