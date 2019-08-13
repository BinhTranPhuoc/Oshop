import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oshop';
  user: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.user = afAuth.authState;
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
