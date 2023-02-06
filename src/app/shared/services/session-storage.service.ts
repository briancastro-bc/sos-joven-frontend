import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { CustomStorage } from '@app/core/storage/storage';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService<T = unknown> extends CustomStorage<T> {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    super(document.defaultView!.sessionStorage);
  }
}
