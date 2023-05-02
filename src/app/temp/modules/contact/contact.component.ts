import { Component, ViewEncapsulation } from '@angular/core';

import { CustomDeviceDetectorService } from '@shared/services';

@Component({
  selector: 'app-contact',
  template: `
    <app-contact-mobile *ngIf="isMobile$ | async"></app-contact-mobile>
    <app-contact-desktop *ngIf="!(isMobile$ | async)"></app-contact-desktop>
  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ContactComponent {

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService,
  ) {}
}
