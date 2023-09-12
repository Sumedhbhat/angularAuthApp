import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userAuth: boolean = true;
  constructor(public service: UserServiceService) {}

  ngOnInit(): void {
    this.service.checkUserAuth().subscribe({
      next: (res: any) => {
        console.log(res);
        this.userAuth = true;
      },
      error: (error: any) => {
        console.log(error);
        this.userAuth = false;
      },
    });
  }
}
