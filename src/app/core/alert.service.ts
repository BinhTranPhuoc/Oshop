import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationStart } from '@angular/router';
import { ALERT, ALERTTYPE } from '../models/alert';
import { Observable } from 'rxjs';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<ALERT>();
  private keepAfterRouterChange = false;

  constructor(
    private router: Router,
  ) {
      this.changeRouter();
  }


  changeRouter() {
    this.router.events.subscribe(event => {
      if ( event instanceof NavigationStart) {
        this.keepAfterRouterChange = false;
      } else {
        this.clearMess();
      }
    });
  }


  clearMess(alertId?: string) {
    this.subject.next(new ALERT({ alertId }));
  }

  // main alert method
  alert(alert: ALERT) {
    this.keepAfterRouterChange = alert.keepAfterRouterChange;
    this.subject.next(alert);
  }

  success(message: string, alertId?: string) {
    this.alert(new ALERT({ message, type: ALERTTYPE.Success, alertId}));
  }

  error(message: string, alertId?: string) {
    this.alert(new ALERT({ message, type: ALERTTYPE.Error, alertId}));
  }

  warning(message: string, alertId?: string) {
    this.alert(new ALERT({ message, type: ALERTTYPE.Warning, alertId}));
  }

  // onAlert(alertId?: string) : Observable<ALERT> {
  //   return this.subject.asObservable().pipe(filter(x => x && x.alertId === alertId));
  // }
}
