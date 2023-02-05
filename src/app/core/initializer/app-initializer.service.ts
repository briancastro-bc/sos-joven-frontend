import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: null
})
export class AppInitializerService {

  constructor() {}

  load(): Observable<void> {
    this.printHelloWorldOnLoad();
    return new Observable<void>(subscriber => {
      subscriber.complete();
    });
  }

  printHelloWorldOnLoad(): void {
    console.log('Initializer hello world');
  }
}
