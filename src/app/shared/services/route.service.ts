import { Injectable, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, switchMap, filter, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: null
})
export class RouteService implements OnDestroy {

  onLanguageChange: Observable<unknown>;

  onLanguageChangeSubscription: Subscription | undefined;

  constructor(
    private readonly title: Title,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly translateService: TranslateService,
  ) {
    this.onLanguageChange = this.translateService.onLangChange.asObservable();
    this.onLanguageChangeSubscription = this.onLanguageChange.subscribe(languageChanged => {
      console.log(languageChanged);
    });
  }

  handleViewsTitle(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: ActivatedRoute) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route
      }),
      switchMap((route) => route.data),
      map((data) => data['title']),
      map((title) => this.translateService.get(title)),
    ).subscribe((title) => {
      title.subscribe(newTitle => this.updateTitle(newTitle)).unsubscribe();
    });
  }

  updateTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  ngOnDestroy(): void {
    if (typeof this.onLanguageChangeSubscription !== 'undefined') {
      this.onLanguageChangeSubscription.unsubscribe();
      this.onLanguageChangeSubscription = undefined;
    }
  }
}
