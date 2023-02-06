import { Injectable } from '@angular/core';
import { ThemeService } from '@app/shared/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: null
})
export class AppInitializerService {

  constructor(
    private readonly themeService: ThemeService
  ) {}

  load(): Observable<void> {

    this.themeService.initialize();

    return new Observable<void>(subscriber => {
      subscriber.complete();
    });
  }
}
