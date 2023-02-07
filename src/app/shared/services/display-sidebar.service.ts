/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DisplaySidebarService {

  private isDisplayedSidebar = false;

  private readonly isDisplayedSidebarEvent$: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly isDisplayedSidebar$: Observable<boolean> = this.isDisplayedSidebarEvent$.asObservable();

  constructor(
    private readonly sessionStorageService: SessionStorageService
  ) {}

  display(): void {
    this.isDisplayedSidebar = this.displayedSidebar ? !this.displayedSidebar : !this.isDisplayedSidebar;
    this.sessionStorageService.setItem('sidebarDisplayedStatus', this.isDisplayedSidebar);
    this.isDisplayedSidebarEvent$.emit(this.isDisplayedSidebar);
  }

  get displayedSidebar(): boolean {
    return this.sessionStorageService.getItem('sidebarDisplayedStatus').value as boolean;
  }
}
