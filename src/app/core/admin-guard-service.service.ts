import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardServiceService implements CanActivate {

  constructor(
    private userService: UserService,
    private auth: AuthService,

  ) { }

  canActivate() {
    return this.auth.user.switchMap(user => this.userService.get(user.uid))
    .map(appUser => appUser.isAdmin);
  }
}
