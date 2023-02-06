import { Component } from '@angular/core';

import { CustomDeviceDetectorService } from '@shared/services';

@Component({
  selector: 'app-banner',
  template: `
    <app-navbar-mobile *ngIf="isMobile$ | async"></app-navbar-mobile>
    <app-banner-desktop *ngIf="!(isMobile$ | async)"></app-banner-desktop>
  `,
})
export class BannerComponent {

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService
  ) {}
}
