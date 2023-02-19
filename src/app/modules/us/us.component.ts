import { Component } from '@angular/core';

import { CustomDeviceDetectorService } from '@shared/services';

@Component({
  selector: 'app-us',
  template: `
    <app-us-mobile *ngIf="isMobile$ | async"></app-us-mobile>
    <app-us-desktop *ngIf="!(isMobile$ | async)"></app-us-desktop>
  `,
})
export class UsComponent {

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService,
  ) {}

}
