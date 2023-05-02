import { DOCUMENT } from '@angular/common';
import { Injectable, inject, } from '@angular/core';

import { CommonStorage } from '@shared/storage/infraestructure';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage extends CommonStorage {

  constructor() {
    super(inject(DOCUMENT).defaultView!.localStorage);
  }

}
