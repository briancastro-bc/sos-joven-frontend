import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocalStorageService } from '@shared/services';

export type ThemeType = 'dark-theme' | 'light-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeSubject$: BehaviorSubject<ThemeType> = new BehaviorSubject<ThemeType>(null!);

  private readonly renderer2: Renderer2;

  readonly theme$: Observable<ThemeType> = this.themeSubject$.asObservable();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly rendererFactory: RendererFactory2,
    private readonly localStorageService: LocalStorageService,
  ) {
    this.renderer2 = this.rendererFactory.createRenderer(null, null);
  }

  initialize(): void {
    if(!this.currentTheme) {
      const userThemePreference = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)');
      if (userThemePreference?.matches) {
        this.localStorageService.setItem('user_theme', 'dark-theme');
      } else {
        this.localStorageService.setItem('user_theme', 'light-theme');
      }
    }

    this.themeSubject$.next(this.currentTheme);
    this.renderer2.addClass(this.document.body, this.currentTheme);
  }

  toggleTheme(): void {
    const nextTheme: ThemeType = this.currentTheme == 'dark-theme' ? 'light-theme' : 'dark-theme';
    switch (nextTheme) {
      case 'dark-theme': {
        this.renderer2.removeClass(this.document.body, this.currentTheme);
        this.renderer2.addClass(this.document.body, 'dark-theme');
        this.localStorageService.setItem('user_theme', 'dark-theme');
        this.themeSubject$.next('dark-theme');
        break;
      }
      case 'light-theme': {
        this.renderer2.removeClass(this.document.body, this.currentTheme);
        this.renderer2.addClass(this.document.body, 'light-theme');
        this.localStorageService.setItem('user_theme', 'light-theme');
        this.themeSubject$.next('light-theme');
        break;
      }
    }
  }

  get currentTheme(): ThemeType {
    return this.localStorageService.getItem('user_theme').value as ThemeType;
  }
}
