/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

import { DisplaySidebarService } from '@shared/services';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar.mobile.component.html',
  styleUrls: ['./navbar.mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarMobileComponent implements OnInit {

  @ViewChild('header') headerEl!: ElementRef<HTMLHeadingElement>;

  @HostListener('window:scroll') onScroll() {
    this.onScrollHeader();
  }

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer2: Renderer2,
    private readonly displaySidebarService: DisplaySidebarService,
  ) {}

  ngOnInit(): void {
    // console.log();
  }

  displaySidebar(): void {
    this.displaySidebarService.display();
  }

  private onScrollHeader(): void {
    if (this.document.defaultView!.scrollY > (this.headerEl.nativeElement.clientHeight - 10)) {
      this.renderer2.addClass(this.headerEl.nativeElement, 'header-mobile__scrolling');
    } else {
      this.renderer2.removeClass(this.headerEl.nativeElement, 'header-mobile__scrolling');
    }
  }
}
