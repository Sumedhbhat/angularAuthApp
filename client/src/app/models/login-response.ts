import { UserModel } from './user-model';

export class LoginResponse {
  user: UserModel = new UserModel();
  jwt: string = '';
}
