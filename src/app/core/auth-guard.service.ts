import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  // protecting router
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.AppUsers.map(user => {
      if (user) {
        return true;
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    });
  }
}
  // } {
  //   return this.auth.user.map(rs => {
  //     if (rs) {
  //       return true;
  //     }
  //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  //     return false;
  //   });
