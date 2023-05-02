import { Component, ViewEncapsulation } from '@angular/core';

import { LoaderService } from '@shared/services';

@Component({
  selector: 'app-loader',
  template: `
    <ng-container [ngSwitch]="(loader$ | async)?.type">
      <ng-container *ngSwitchCase="'progressbar'">
        <app-loader-progressbar></app-loader-progressbar>
      </ng-container>
      <ng-container *ngSwitchCase="'fullscreen'">
        <app-loader-fullscreen-spinner></app-loader-fullscreen-spinner>
      </ng-container>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class LoaderComponent {

  readonly loader$ = this.loaderService.loader$;

  constructor(
    private readonly loaderService: LoaderService
  ) {}
}
