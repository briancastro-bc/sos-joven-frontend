import { Observable } from 'rxjs';

export type EventType = 'get' | 'set' | 'remove' | 'clear';

export interface StorageEvent {
  key: string | 'all';
  event: EventType;
  oldItem?: any;
  newItem?: any;
}

export interface StorageItem<T> {
  item: NonNullable<T>;
  version?: string;
  timestamp: number;
}

export interface StorageRepository {
  getItem<T>(key: string): StorageItem<T> | Promise<StorageItem<T>> | undefined;

  setItem<T>(key: string, item: NonNullable<T>): void;

  watchItem<T>(key: string): Observable<T>;

  removeItem(key: string): void;

  clearItems(): void;
}
