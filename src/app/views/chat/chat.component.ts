import { Component, inject } from '@angular/core';

import { CustomDeviceDetectorService } from '@common/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  template: `

  `,
  standalone: true
})
export default class ChatComponent {

  private readonly deviceDetectorService: CustomDeviceDetectorService = inject(CustomDeviceDetectorService);

  readonly isMobile$: Observable<boolean> = this.deviceDetectorService.isMobile$;
}
