import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
//import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.userService.logeedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
