import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbCollapseModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
  ],
  declarations: [AppComponent, NavigationComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
