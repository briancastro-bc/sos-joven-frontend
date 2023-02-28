import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type LoaderType = 'progressbar' | 'fullscreen';

export interface Loader {
  type: LoaderType | undefined;
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private readonly loaderSubject$: BehaviorSubject<Loader> = new BehaviorSubject<Loader>({ type: undefined, isLoading: false });

  readonly loader$: Observable<Loader> = this.loaderSubject$.asObservable();

  show(type: LoaderType): void {
    this.loaderSubject$.next({ type, isLoading: true, });
  }

  hide(): void {
    this.loaderSubject$.next({ type: undefined, isLoading: false, });
  }
}
