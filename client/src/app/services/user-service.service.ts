import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../models/login-response';

let goThroughInterceptor = 'Go-Through-Interceptor';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  loginFormData: UserModel = new UserModel();
  registerFormData: UserModel = new UserModel();
  url: string = 'http://localhost:5225/api/';
  authorized: boolean = false;

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
    this.authorized = false;
    this.http.post(this.url + 'Logout', {});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('jwt');
  }

  loginUser() {
    this.authorized = true;
    return this.http.post<LoginResponse>(
      this.url + 'login',
      this.loginFormData
    );
  }

  createUser() {
    return this.http.post(this.url + 'register', this.registerFormData);
  }

  checkUserAuth() {
    const headers = new HttpHeaders().set('skip', `false`);
    return this.http.get(this.url + 'checkAuth', { headers });
  }
}
