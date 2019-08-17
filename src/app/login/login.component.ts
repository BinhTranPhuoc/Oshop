import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../core/auth-guard.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
  ) { }

  login() {
    this.auth.login();
  }

}
