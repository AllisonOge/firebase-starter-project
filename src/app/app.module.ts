import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';
import { MainComponent } from './main/main.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbCollapseModule],
  declarations: [AppComponent, NavigationComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
