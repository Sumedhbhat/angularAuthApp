import { Component, Input } from '@angular/core';

interface User {
  name: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input()
  user: User | null = null;
  constructor() {}
  @Input()
  onLogout: () => void;

  loggingOut() {
    // this.onLogout();
    console.log('logging out');
  }
}
