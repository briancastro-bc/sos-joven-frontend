import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

import { CommonStorage } from '@shared/storage/infraestructure';

@Injectable({
  providedIn: 'root',
})
export class SessionStorage extends CommonStorage {

  constructor() {
    super(inject(DOCUMENT).defaultView!.sessionStorage);
  }

}
