import { Component, ViewEncapsulation } from '@angular/core';

import { LocalStorageService } from '@shared/services';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home.mobile.component.html',
  styleUrls: ['./home.mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeMobileComponent {

  constructor(
    private readonly localStorageService: LocalStorageService
  ) { }
}
