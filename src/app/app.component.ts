import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';
import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oshop';
  returnUrl: string;
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
  ) {
    auth.user.subscribe(rs => {
      if (rs) {
        this.userService.save(rs);
        this.returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(this.returnUrl);
      }
    });
  }

  logOut() {
    this.auth.logOut();
  }
}
