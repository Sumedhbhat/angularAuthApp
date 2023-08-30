import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class apiMiddleWear {
  wrapApiWithAuth(func: Function, ...args: any) {
    const header: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('jwt')
    );
    console.log(func);
    var result = func(header, ...args);
    return result;
  }
}
