import { Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';

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
})
export class LayoutComponent implements OnInit {

  @ViewChild('main') mainContent!: ElementRef<HTMLElement>;

  @ViewChild(SidebarDirective, { static: true }) sidebarHost!: SidebarDirective;

  readonly isMobile$ = this.deviceDetectorService.isMobile$;

  private isDisplayedSidebar = true;

  private sidebarComponentRef!: ComponentRef<SidebarComponent>;

  constructor(
    private readonly displaySidebarService: DisplaySidebarService,
    private readonly deviceDetectorService: CustomDeviceDetectorService,
  ) {}

  ngOnInit(): void {
    this.displaySidebarService.isDisplayedSidebar$.subscribe(isDisplayed => {
      this.isDisplayedSidebar = isDisplayed;
      this.attachSidebarComponent();
    });
  }

  private attachSidebarComponent(): void {
    if (this.sidebarHost.viewContainerRef.length > 0) {
      this.sidebarComponentRef.destroy();
      return;
    }
    this.sidebarComponentRef = this.sidebarHost.viewContainerRef.createComponent(SidebarComponent);
  }
}
