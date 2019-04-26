import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any;
  isLoggedIn = false;
  title = 'Employee Review App';

  constructor() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    if (this.user) {
      this.isLoggedIn = true;
    }
  }
}
