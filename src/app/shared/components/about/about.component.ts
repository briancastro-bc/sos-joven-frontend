import { Component } from '@angular/core';

import { CustomDeviceDetectorService } from '@shared/services';

@Component({
  selector: 'app-about',
  template: `
    <!-- <app-about-desktop *ngIf="isMobile$ | async"></app-navbar-mobile> -->
    <app-about-desktop *ngIf="!(isMobile$ | async)"></app-about-desktop>
  `,
})
export class AboutComponent {

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService
  ) {}
}
