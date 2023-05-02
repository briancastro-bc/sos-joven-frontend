import { Component } from '@angular/core';
import { CustomDeviceDetectorService } from '@shared/services';

@Component({
  selector: 'app-products',
  template:  `
  <!-- <app-home-mobile *ngIf="isMobile$ | async"></app-home-mobile> -->
  <app-products-desktop *ngIf="!(isMobile$ | async)"></app-products-desktop>
`,
})
export class ProductsComponent {

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  constructor(
    private readonly deviceDetectorService: CustomDeviceDetectorService
  ) {}
}
