import {
  inject,
  Component,
} from '@angular/core';
import {
  NgIf,
  AsyncPipe
} from '@angular/common';
import { Observable } from 'rxjs';

import { CustomDeviceDetectorService } from '@common/services';

import { StartupMobileComponent } from './mobile/startup.mobile.component';
import { StartupDesktopComponent } from './desktop/startup.desktop.component';

@Component({
  selector: 'app-startup',
  template: `
    <app-startup-mobile *ngIf="(isMobile$ | async)"></app-startup-mobile>
    <app-startup-desktop *ngIf="!(isMobile$ | async)"></app-startup-desktop>
  `,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    StartupMobileComponent,
    StartupDesktopComponent,
  ]
})
export default class StartupComponent {

  private readonly deviceDetectorService: CustomDeviceDetectorService = inject(CustomDeviceDetectorService);

  readonly isMobile$: Observable<boolean> = this.deviceDetectorService.isMobile$;

}
