import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanLoadFn } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const authGuardGuard: CanActivateFn = (
  route,
  state
): Observable<boolean> => {
  var result = inject(UserServiceService)
    .checkUserAuth()
    .pipe(map((x: any) => (x.status === 401 ? false : true)));
  return result;
};
