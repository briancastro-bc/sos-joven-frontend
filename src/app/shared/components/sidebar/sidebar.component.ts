import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { DisplaySidebarService, ThemeService, ThemeType } from '@shared/services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('openClose', [
      state('false', style({
        opacity: 0,
      })),
      state('true', style({
        opacity: 1,
      })),
      transition('false => true', [
        animate('5s ease-in', keyframes([
          style({ height: '100vh', offset: 1 }),
        ]))
      ]),
      transition('true => false', [
        animate('5s ease-out', keyframes([
          style({ height: '20vh', offset: 0.25 }),
        ])),
      ])
    ]),
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {

  @ViewChild('sidebar') sidebarEl!: ElementRef<HTMLElement>;

  isDisplayedSidebar = 'true';

  readonly currentTheme$: Observable<ThemeType> = this.themeService.theme$;

  private subscription: Subscription | undefined;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer2: Renderer2,
    private readonly themeService: ThemeService,
    private readonly displaySidebarService: DisplaySidebarService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.displaySidebarService.isDisplayedSidebar$.subscribe(displayed => {
      console.log('displayed', displayed);
      if (displayed) {
        this.isDisplayedSidebar = 'true';
      } else {
        this.isDisplayedSidebar = 'false';
      }
    });
  }

  displaySidebar(): void {
    this.displaySidebarService.display();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnDestroy(): void {
    if(typeof this.subscription !== 'undefined') {
      this.subscription.unsubscribe();
    }
  }
}
