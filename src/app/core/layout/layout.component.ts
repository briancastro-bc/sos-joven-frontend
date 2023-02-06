import { Component, ElementRef, ViewChild } from '@angular/core';

import { CustomDeviceDetectorService } from '@shared/services';

@Component({
  selector: 'app-layout',
  template: `
    <app-navbar-mobile *ngIf="isMobile$ | async"></app-navbar-mobile>
    <app-navbar-desktop *ngIf="!(isMobile$ | async)"></app-navbar-desktop>

    <main #main>
      <router-outlet></router-outlet>
    </main>

    <app-footer-mobile *ngIf="isMobile$ | async"></app-footer-mobile>
  `
})
export class LayoutComponent {
  @ViewChild('main') mainContent!: ElementRef<HTMLElement>;

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService
  ) {}
}
