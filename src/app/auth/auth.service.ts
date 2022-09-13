import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        // user is logged in
        if (user) return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        // user is logged out
        else return of(null);
      })
    );
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `user/${user.uid}`
    );
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user?.photoURL,
    };

    this.router.navigate(['/']);
    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
