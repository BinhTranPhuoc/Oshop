import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';
import { UserService } from './core/user.service';
import { AppUser } from './models/appUser';
import { AlertService } from './core/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oshop';
  returnUrl: string;

  appUser: AppUser;

  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) {
    auth.User.subscribe(user => {
      if (user) {
        this.userService.save(user);

        this.returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(this.returnUrl);
      }
    });

    auth.AppUsers.subscribe(appUser => this.appUser = appUser);
  }

  logOut() {
    this.auth.logOut();
  }

  success(message: string) {
    this.alertService.success(message);
  }
}
