import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [{ path: 'login', component: AuthComponent }];

const firebaseConfig = {
  apiKey: 'AIzaSyAIZQwL5BlYzKttqWVv2h8ee-Y973c3tQs',
  authDomain: 'fir-starter-project-16ba6.firebaseapp.com',
  projectId: 'fir-starter-project-16ba6',
  storageBucket: 'fir-starter-project-16ba6.appspot.com',
  messagingSenderId: '1041644034763',
  appId: '1:1041644034763:web:88192887230d222848194e',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbCollapseModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    // AngulareFireAuthModule,
  ],
  declarations: [AppComponent, NavigationComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
