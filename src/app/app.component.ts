import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';
import { UserService } from './core/user.service';
import { AppUser } from './models/appUser';
import { AlertService } from './core/alert.service';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oshop';
  returnUrl: string;

  appUser: AppUser;
  isDisableNav = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private spinnerService: NgxSpinnerService,
  ) {
    this.auth.User.subscribe(user => {
      if (user) {
        this.userService.save(user);
        this.returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(this.returnUrl);
      }
    });

    this.checkUserLogin();
  }

  checkUserLogin() {
    this.spinnerService.show();
    this.auth.getAppUsers().subscribe(res => {
      if (res) {
        if (res.isAdmin == true) {
          this.appUser = res;
          this.router.navigate(['/admin']);
        }
        else {
          this.appUser = res;
          this.router.navigate(['/home']);
          this.isDisableNav = true;
        }
      }
      else {
        this.router.navigate(['/home']);
        this.isDisableNav = true;
      }
      this.spinnerService.hide();
    });
  }

  logOut() {
    this.auth.logOut();
  }

  success(message: string) {
    this.alertService.success(message);
  }
}
