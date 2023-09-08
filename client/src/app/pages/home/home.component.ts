import { Component, OnInit } from '@angular/core';
import { ApiMiddlewearService } from 'src/app/services/api-middlewear.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { apiMiddleWear } from 'src/middlewear/apiMiddlewear';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userAuth: boolean = true;
  constructor(
    public service: UserServiceService,
    private authMiddleWear: ApiMiddlewearService
  ) {}

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
