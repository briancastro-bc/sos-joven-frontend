
/**
 *
 * @interface StorageItem<T=uknown>
 *
 * @property { value } - Represents the value to store
 * @property { timestamp } - Timestamp when the value was stored
 *
 */
export interface StorageItem<T = unknown> {
  value: T;
  timestamp: number;
  version?: string;
}

/**
 *
 * @interface StorageEvent - Represents event payload when a change occurs in local or session storage
 *
 * @property { event } - Emitted event
 * @property { key } - Key affected on the event
 * @property { lastValue } - Las value stored in storage
 * @property { newValue } - New value stored in storage
 *
 */
export interface StorageEvent {
  event: 'getItem' | 'setItem' | 'removeItem' | 'clear';
  key: string | 'all';
  type?: string;
  lastValue?: unknown;
  newValue?: unknown;
}
