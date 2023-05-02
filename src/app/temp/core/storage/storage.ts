/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';
import { StorageItem, StorageEvent } from '@src/app/shared/common/interfaces';

/**
 *
 * @class CustomStorage - Represents local and session storage custom implementation
 *
 */
export class CustomStorage<T> {

  public readonly onStorageChange: EventEmitter<StorageEvent> = new EventEmitter<StorageEvent>();

  private readonly storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  getItem(key: string): StorageItem<T> {
    this.emit({
      key,
      event: 'getItem',
      newValue: this.getLastValue(key),
      lastValue: this.getLastValue(key),
    });
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : '';
  }

  setItem(key: string, value: unknown): void {
    this.emit({
      key,
      event: 'setItem',
      newValue: value,
      lastValue: this.getLastValue(key),
    });
    this.storage.setItem(key, JSON.stringify({ value, timestamp: new Date().getTime(), version: environment.version, }));
  }

  removeItem(key: string): void {
    this.emit({
      key,
      event: 'removeItem',
      newValue: undefined,
      lastValue: this.getLastValue(key),
    });
    this.storage.removeItem(key);
  }

  clear(): void {
    this.emit({
      key: 'all',
      event: 'clear',
      newValue: undefined,
      lastValue: this.getLastValues()
    });
    this.storage.clear();
  }

  watch(key: string): Observable<any> {
    return new Observable<any>(subscriber => {
      this.onStorageChange.subscribe(change => {
        if (change.key === key) {
          return subscriber.next(change);
        }
      });
    });
  }

  private emit(event: StorageEvent): void {
    this.onStorageChange.emit({
      ...event,
    });
  }

  private getLastValue(key: string): StorageItem<T> {
    const value = JSON.parse(this.storage.getItem(key)!) as any;
    return value?.value;
  }

  private getLastValues(): { key: string, value: any }[] {
    return Object.entries(this.storage).map(([key, _]) => {
      const itemValue = this.getLastValue(key);
      return { key, value: itemValue, };
    });
  }
}
