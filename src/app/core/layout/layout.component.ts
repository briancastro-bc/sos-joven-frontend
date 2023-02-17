import { AfterViewInit, Component, ComponentRef, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { CustomDeviceDetectorService, DisplaySidebarService } from '@shared/services';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { SidebarDirective } from '@shared/components/sidebar/sidebar.directive';

@Component({
  selector: 'app-layout',
  template: `
    <ng-container appSidebarHost></ng-container>

    <app-navbar-mobile *ngIf="isMobile$ | async"></app-navbar-mobile>
    <app-navbar-desktop *ngIf="!(isMobile$ | async)"></app-navbar-desktop>

    <main #main>
      <router-outlet></router-outlet>
    </main>

    <app-footer-mobile *ngIf="isMobile$ | async"></app-footer-mobile>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit, OnDestroy {

  @ViewChild('main') mainContent!: ElementRef<HTMLElement>;

  @ViewChild(SidebarDirective, { static: true }) sidebarHost!: SidebarDirective;

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  private subscription: Subscription | undefined;

  private isDisplayedSidebar = true;

  private sidebarComponentRef!: ComponentRef<SidebarComponent>;

  constructor(
    private readonly displaySidebarService: DisplaySidebarService,
    private readonly deviceDetectorService: CustomDeviceDetectorService,
  ) {}

  ngAfterViewInit(): void {
    this.subscription = this.displaySidebarService.isDisplayedSidebar$.subscribe(isDisplayed => {
      this.isDisplayedSidebar = isDisplayed;
      this.attachSidebar();
    });
  }

  ngOnDestroy(): void {
    if (typeof this.subscription !== 'undefined') {
      this.subscription.unsubscribe();
    }
  }

  private attachSidebar(): void {
    if (this.sidebarHost.viewContainerRef.length > 0) {
      this.sidebarComponentRef.destroy();
      return;
    }
    this.sidebarComponentRef = this.sidebarHost.viewContainerRef.createComponent(SidebarComponent);
  }
}
