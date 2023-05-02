import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader-fullscreen-spinner',
  template: `
    <div class="fullscreen-spinner">
      <div class="fullscreen-spinner--container">
        <div class="fullscreen-spinner--container__loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span class="fullscreen-spinner--container__message">
          {{ 'layout.loader.fullscreen' | translate }}
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./fullscreen-spinner.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FullscreenSpinnerComponent {

}
