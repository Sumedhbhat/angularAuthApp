export class UserModel {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(name?: string, email?: string) {
    this.name = name ? name : '';
    this.email = email ? email : '';
  }
}
