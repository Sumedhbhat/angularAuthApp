import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  loginFormData: UserModel = new UserModel();
  registerFormData: UserModel = new UserModel();
  url: string = 'http://localhost:5225/api/';

  constructor(public http: HttpClient) {}

  setUser(user: UserModel, jwt: string) {
    localStorage.setItem(
      'userInfo',
      JSON.stringify(new UserModel(user.email, user.name))
    );
    localStorage.setItem('jwt', jwt);
  }

  getUser(): UserModel | null {
    var json = localStorage.getItem('userInfo');
    if (json) return JSON.parse(json) as UserModel;
    else return null;
  }

  logOutUser() {
    this.http.post(this.url + 'Logout', {});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('jwt');
  }

  loginUser() {
    return this.http.post<LoginResponse>(
      this.url + 'login',
      this.loginFormData
    );
  }

  createUser() {
    return this.http.post(this.url + 'register', this.registerFormData);
  }

  checkUserAuth(headers: HttpHeaders) {
    console.log(this);
    return this.http.get(this.url + 'checkAuth', { headers });
  }
}
