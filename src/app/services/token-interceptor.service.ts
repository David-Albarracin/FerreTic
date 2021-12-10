import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private userService: UserService
  ) { }


  intercept(req: any, next: any) {
    const tokeinzeReq = req.clone({
      setHeaders: {
        authorization: 'Bearer ${this.userService.getToken()}'
      }
    })
    return next.handle(tokeinzeReq);    
  }
}
