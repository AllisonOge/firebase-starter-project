import { Component, OnInit, OnDestroy } from '@angular/core';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [``],
})
export class AuthComponent implements OnInit, OnDestroy {
  ui: firebaseui.auth.AuthUI;
  constructor(private afAuth: AngularFireAuth, private auth: AuthService) {}

  ngOnInit() {
    this.afAuth.app.then((app) => {
      const uiConfig = {
        signInOptions: [
          EmailAuthProvider.PROVIDER_ID,
          GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: this.onLogInSuccess.bind(this),
        },
      };

      this.ui = new firebaseui.auth.AuthUI(app.auth());
      this.ui.start('#firebaseui-auth-container', uiConfig);
    });
  }

  onLogInSuccess(result) {
    console.log(result);
    this.auth.updateUserData(result.user);
  }

  ngOnDestroy() {
    this.ui.delete();
  }
}
