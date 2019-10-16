import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../models/appUser';
import { UserService } from './user.service';
import 'rxjs/add/observable/of';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: Observable<firebase.User>;
  returnUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private spinnerService: NgxSpinnerService,
  ) {
    this.User = afAuth.authState;
  }

  login() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', this.returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut() {
    this.afAuth.auth.signOut();
    localStorage.clear();
  }

  getAppUsers(): Observable<AppUser> {
    return this.User
      .switchMap(user => {
        if (user) {
          return this.userService.get(user.uid);
        }
        return Observable.of(null);
      });
  }
}
