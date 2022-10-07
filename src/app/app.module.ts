import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faGoogle,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },
];

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
    ReactiveFormsModule,
    NgbCollapseModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    AuthComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGoogle, faGithub, faFacebook);
  }
}
