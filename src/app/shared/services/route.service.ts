/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy, SecurityContext } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, switchMap, filter, Observable, Subscription, interval, take } from 'rxjs';

import { environment } from '@environment/environment';
import { LoaderService } from '@shared/services';

@Injectable({
  providedIn: null
})
export class RouteService implements OnDestroy {

  // onLanguageChange!: Observable<unknown>;

  onLanguageChangeSubscription: Subscription | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly title: Title,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
    private readonly loaderService: LoaderService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly translateService: TranslateService,
  ) {
    // this.onLanguageChange = this.translateService.onLangChange.asObservable();
    // this.onLanguageChangeSubscription = this.onLanguageChange.subscribe(_ => {
    //   // Do something
    // });
    this.activatedRoute.queryParams
      .subscribe(queryParams => {
        const { redirect, } = queryParams;

        if (redirect) {
          this.secureRedirection(redirect);
          return;
        }
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

  secureRedirection(url: string): void {
    this.loaderService.show('fullscreen');
    const sanitizedUrl = this.sanitizer.sanitize(SecurityContext.URL, url) as string;

    interval(2000)
      .pipe(take(1))
      .subscribe(_ => {
        const reForValidRedirects = /\.*\w+\./i as RegExp;
        const matched: string = sanitizedUrl.match(reForValidRedirects)![0].split('.')[0];

        const { secureRedirections, }: any = environment;

        const matchedRedirect: string = secureRedirections[matched];
        if (matchedRedirect) {
          this.document.defaultView?.open(matchedRedirect, '_blank');
        }

        this.router.navigate([], {
          queryParams: {
            redirect: null
          },
          queryParamsHandling: 'merge',
        });

        this.loaderService.hide();
      });
  }

  ngOnDestroy(): void {
    if (typeof this.onLanguageChangeSubscription !== 'undefined') {
      this.onLanguageChangeSubscription.unsubscribe();
      this.onLanguageChangeSubscription = undefined;
    }
  }
}
