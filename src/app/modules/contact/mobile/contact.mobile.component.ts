import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { LoaderService } from '@shared/services';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact.mobile.component.html',
  styleUrls: ['./contact.mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ContactMobileComponent implements OnInit, OnDestroy {

  constructor(
    private readonly loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    // Do something
  }

  ngOnDestroy(): void {
    // Do something
  }
}
