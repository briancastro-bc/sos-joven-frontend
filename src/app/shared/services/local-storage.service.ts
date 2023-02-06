/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { CustomStorage } from '@core/storage/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T = unknown> extends CustomStorage<T> {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    super(document.defaultView!.localStorage);
  }
}
