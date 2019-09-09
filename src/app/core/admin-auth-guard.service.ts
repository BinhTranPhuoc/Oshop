import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private userSevice: UserService,
    private auth: AuthService,
  ) { }
  canActivate(): Observable<boolean> {
    return this.auth.User.switchMap(user => this.userSevice.get(user.uid))
    .map(appUser => appUser.isAdmin);
  }
}
