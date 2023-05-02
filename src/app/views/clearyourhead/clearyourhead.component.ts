import {
  Component,
  inject
} from '@angular/core';
import {
  NgIf,
  AsyncPipe
} from '@angular/common';
import { Observable } from 'rxjs';

import { CustomDeviceDetectorService } from '@common/services';

import { ClearyourheadMobileComponent } from './mobile/clearyourhead.mobile.component';
import { ClearyourheadDesktopComponent } from './desktop/clearyourhead.desktop.component';

@Component({
  selector: 'app-clearyourhead',
  template: `
    <app-clearyourhead-mobile *ngIf="(isMobile$ | async)"></app-clearyourhead-mobile>
    <app-clearyourhead-desktop *ngIf="!(isMobile$ | async)"></app-clearyourhead-desktop>
  `,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ClearyourheadMobileComponent,
    ClearyourheadDesktopComponent
  ],
})
export default class ClearyourheadComponent {

  private readonly deviceDetectorService: CustomDeviceDetectorService = inject(CustomDeviceDetectorService);

  readonly isMobile$: Observable<boolean> = this.deviceDetectorService.isMobile$;

}
