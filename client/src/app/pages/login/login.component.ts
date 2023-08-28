import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { UserModel } from '../../models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  constructor(public service: UserServiceService,private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.service.loginFormData);
      this.service.loginUser().subscribe({
        next: (res) => {
          this.service.setUser(res.user, res.jwt);
          console.log(res);
          form.form.reset();
          this.router.navigate(['/'])
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
