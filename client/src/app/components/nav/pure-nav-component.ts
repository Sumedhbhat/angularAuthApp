import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

interface User {
  name: string;
}

@Component({
  selector: 'app-pure-nav',
  template: '<app-nav [user]="user" (onLogout)="onLogout"></app-nav>',
})
export class PureNavComponent {
  @Input()
  user: User | null = null;
  constructor(public service: UserServiceService, private router: Router) {
    console.log(this.service);
  }

  onLogout = (): void => {
    this.service.logOutUser();
    this.router.navigate(['login']);
  };
}
