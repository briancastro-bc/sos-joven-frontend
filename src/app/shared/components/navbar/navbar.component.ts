import { Component } from '@angular/core';

import { CustomDeviceDetectorService } from '@shared/services';

@Component({
  selector: 'app-navbar',
  template: `
    <app-navbar-mobile *ngIf="isMobile$ | async"></app-navbar-mobile>
    <!-- <app-navbar-desktop *ngIf="!(isMobile$ | async)"></app-navbar-desktop> -->
  `,
})
export class NavbarComponent {

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService
  ) {}
}
