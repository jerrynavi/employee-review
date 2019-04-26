import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      username: new FormControl(this.user.username, [
        Validators.required,
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
      ])
    });

  }

  login() {
    localStorage.setItem('user', JSON.stringify({username: this.user.username, password: this.user.password}));
    this.router.navigate(['/add-employee']);
  }

}
