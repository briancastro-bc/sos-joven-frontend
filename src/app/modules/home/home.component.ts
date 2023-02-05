import { Component } from '@angular/core';

import { CustomDeviceDetectorService } from '@shared/services/device-detector.service';

@Component({
  selector: 'app-home',
  template: `
    <!-- <app-home-mobile *ngIf="isMobile$ | async"></app-home-mobile>
    <app-home-desktop *ngIf="!isMobile$ | async"></app-home-desktop> -->
  `,
})
export class HomeComponent {

  isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService
  ) {}

}
