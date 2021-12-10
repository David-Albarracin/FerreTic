import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    public userService: UserService
  ) { }
  title = 'FerreTic';
  show: boolean = true;
  
}
