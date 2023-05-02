/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, switchMap, filter, Observable, Subscription, interval, take, BehaviorSubject, delay, tap } from 'rxjs';

import { environment } from '@environment/environment';
import { LoaderService } from '@shared/services';

interface Redirection {
  url: string;
  isExternal?: boolean;
}

@Injectable({
  providedIn: null,
})
export class RouteService implements OnDestroy {

  // onLanguageChange!: Observable<unknown>;

  onLanguageChangeSubscription: Subscription | undefined;

  private readonly redirectionSubject$: BehaviorSubject<Redirection> = new BehaviorSubject<Redirection>(null!);

  readonly redirection$: Observable<Redirection> = this.redirectionSubject$.asObservable();

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
    this.redirection$
      .pipe(
        filter((r) => r !== null || r  != null),
        map(redirection => {
          this.router.navigate([],
            {
              relativeTo: this.activatedRoute,
              queryParams: { redirect: redirection.url, isExternal: redirection.isExternal }
            });
          return redirection;
        }),
        delay(2000),
      ).subscribe(redirection => {
        this.document.defaultView?.open(redirection.url, '_blank');

        this.router.navigate(
          [],
          {
            queryParams: {
              redirect: null,
              isExternal: null,
            },
            queryParamsHandling: 'merge',
          }
        );

        this.loaderService.hide();
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
      title
        .pipe(take(1))
        .subscribe(newTitle => this.updateTitle(newTitle))
        .unsubscribe();
    });
  }

  updateTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  secureRedirection(redirect: string): void {
    this.loaderService.show('fullscreen');

    this.redirect(redirect);
  }

  ngOnDestroy(): void {
    if (typeof this.onLanguageChangeSubscription !== 'undefined') {
      this.onLanguageChangeSubscription.unsubscribe();
      this.onLanguageChangeSubscription = undefined;
    }
  }

  private redirect(url: string): void {
    url = url.toLowerCase();

    const { secureRedirections, }: any = environment;

    const isExternalUrl = this.isUrl(url);
    const sanitizedRedirectionUrl: string = isExternalUrl ? this.sanitizeUrl(url) : secureRedirections[url];

    this.redirectionSubject$.next({ url: sanitizedRedirectionUrl, isExternal: isExternalUrl, });
  }

  private sanitizeUrl(url: string): string {
    return this.sanitizer.sanitize(SecurityContext.URL, url) as string;
  }

  private isUrl(value: string): boolean {
    const urlValidatorRegExp = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    return urlValidatorRegExp.test(value);
  }
}
