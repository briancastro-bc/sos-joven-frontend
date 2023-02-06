import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar.mobile.component.html',
  styleUrls: ['./navbar.mobile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarMobileComponent {

  @ViewChild('header') headerEl!: ElementRef<HTMLHeadingElement>;

  @HostListener('window:scroll') onScroll() {
    this.onScrollHeader();
  }

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer2: Renderer2
  ) {}

  private onScrollHeader(): void {
    if (this.document.defaultView!.scrollY > (this.headerEl.nativeElement.clientHeight - 10)) {
      this.renderer2.addClass(this.headerEl.nativeElement, 'header-mobile__scrolling');
      // this.renderer2.addClass(this.headerEl.nativeElement, 'yt-glassmorphism');
    } else {
      this.renderer2.removeClass(this.headerEl.nativeElement, 'header-mobile__scrolling');
      // this.renderer2.removeClass(this.headerEl.nativeElement, 'yt-glassmorphism');
    }
  }
}
