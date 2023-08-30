import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root',
})
export class ApiMiddlewearService {
  constructor() {}

  wrapApiWithAuth(
    func: (header: HttpHeaders, ...args: any[]) => any,
    ...args: any[]
  ) {
    const header: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('jwt')
    );
    console.log(func);
    return func(header, ...args);
  }
}
