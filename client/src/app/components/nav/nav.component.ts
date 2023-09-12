import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private service:UserServiceService, private router:Router){}

  onLogout(){
    this.service.logOutUser();
    this.router.navigate(['login']);
  }
}
