import { Component, ElementRef, Inject, Input, Renderer2, ViewChild } from '@angular/core';
import { Banner } from '@app/common/interfaces/banner.inteface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-banner-desktop',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerDesktopComponent {

  @Input() information!: Banner[]
  @Input() velocity: number = 0
  @ViewChild('slide', { static: true }) slide!: ElementRef
  public bannerState: number = 0
  public timeoutId!: number | any 

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    this.resetTimer();
    this.document.documentElement.style.setProperty('--banner-velocity', `${this.velocity}ms`)
  }

  changeBanner(pos: number) {
    this.bannerState = pos
    this.showBanner(pos)
    this.resetTimer();
  }

  showBanner(pos: number) {
    const banner: HTMLElement = this.slide.nativeElement.children[pos]
    const banners: HTMLElement[] = this.slide.nativeElement.children
    Array.from(banners).map((item: HTMLElement) => {
      this.renderer2.setAttribute(item, 'style', '');
    })
    this.renderer2.setAttribute(banner, 'style', 'transform: translateX(0); opacity: 1;');
  }

  next() {
    if (this.bannerState < this.information.length - 1)
      this.bannerState++
    else
      this.bannerState = 0
    this.showBanner(this.bannerState)
  }

  resetTimer() {
    if (!!this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setInterval(() => this.next(), this.velocity);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }
}