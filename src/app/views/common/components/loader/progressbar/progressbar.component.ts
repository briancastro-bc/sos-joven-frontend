import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader-progressbar',
  template: `
		<div class="progressbar js-transition" role="progressbar">
			<div class="progressbar__loader"></div>
		</div>
  `,
  styleUrls: ['./progressbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProgressbarComponent {

}
