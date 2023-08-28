import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name:string="";
  email:string="";
  password:string="";

  constructor(public service:UserServiceService,private router:Router) {}

  onSubmit(form:NgForm){
    if(form.valid){
      this.service.createUser().subscribe({
        next:res=>{
          console.log(res);
          this.router.navigate(['login']);
        },
        error:error=>{
          console.log(error)
        }
      })   
    }
  }
}
