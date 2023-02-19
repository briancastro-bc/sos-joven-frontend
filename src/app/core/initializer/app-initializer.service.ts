import { Injectable } from '@angular/core';
import { RouteService, ThemeService } from '@shared/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: null
})
export class AppInitializerService {

  constructor(
    private readonly themeService: ThemeService,
    private readonly routeService: RouteService,
  ) {}

  load(): Observable<void> {

    this.themeService.initialize();

    this.routeService.handleViewsTitle();

    return new Observable<void>(subscriber => {
      subscriber.complete();
    });
  }
}
