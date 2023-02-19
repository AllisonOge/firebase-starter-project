import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="row">
  <div class="col-12 col-lg-3">
    <ng-content select="[sidebar]"></ng-content>
  </div>
  <div class="col-12 col-lg-9">
    <ng-content select="[mainbar]"></ng-content>
  </div>
</div>
  `,
})
export class MainComponent {}
