import { Observable, Subject, Subscriber, first } from 'rxjs';

import { StorageRepository, StorageItem, StorageEvent } from '@shared/storage/domain';

export class CommonStorage implements StorageRepository {

  private readonly _storage: Storage;

  public readonly storageChange: Subject<StorageEvent> = new Subject<StorageEvent>();

  constructor(storage: Storage) {
    this._storage = storage;
  }

  getItem<T>(key: string): StorageItem<T> | undefined {
    this.emit({
      key,
      event: 'get',
      newItem: this.getLastItem<T>(key),
      oldItem: this.getLastItem<T>(key),
    });

    const rawItem = this._storage.getItem(key) ?? undefined;
    if(!rawItem)
      return undefined;

    const itemFromStorage = JSON.parse(rawItem) as StorageItem<T>;
    return itemFromStorage;
  }

  setItem<T>(key: string, item: NonNullable<T>): void {
    this.emit({
      key,
      event: 'set',
      newItem: item,
      oldItem: this.getLastItem<T>(key),
    });

    const itemToSave: string = JSON.stringify(
      {
        item,
        version: null,
        timestamp: Date.now(),
      }
    );
    this._storage.setItem(key, itemToSave);
  }

  removeItem(key: string): void {
    this.emit({
      key,
      event: 'remove',
      newItem: undefined,
      oldItem: this.getLastItem<any>(key),
    });

    this._storage.removeItem(key);
  }

  clearItems(): void {
    this.emit({
      key: 'all',
      event: 'clear',
      newItem: undefined,
      oldItem: this.getLastItems<any>(),
    });

    this._storage.clear();
  }

  watchItem<T>(key: string): Observable<T> {
    return new Observable<T>((subscriber: Subscriber<T>) => {
      this.storageChange
        .pipe(first())
        .subscribe(
          (storage: StorageEvent) => storage.key === key ? subscriber.next(this.getItem(key)?.item as T) : subscriber.complete()
        )
    });
  }

  private emit(event: Required<StorageEvent>): void {
    this.storageChange.next(event);
  }

  private getLastItem<T>(key: string): T | undefined {
    return this.getItem<T>(key)?.item;
  }

  private getLastItems<T>(): T[] | undefined {
    return Object.entries(this._storage).map(
      ([key]) => (this.getLastItem<T>(key) as T)
    );
  }
}
