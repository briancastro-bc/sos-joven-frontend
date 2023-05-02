import {
  OnInit,
  Component,
  ViewEncapsulation
} from '@angular/core';

import { ButtonComponent } from '@common/components';

@Component({
  selector: 'app-startup-mobile',
  templateUrl: './startup.mobile.component.html',
  styleUrls: ['./startup.mobile.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  imports: [
    ButtonComponent
  ]
})
export class StartupMobileComponent implements OnInit {

  ngOnInit(): void {
    // Do something
  }

  click(): void {
    console.log("cliked");
  }
}
