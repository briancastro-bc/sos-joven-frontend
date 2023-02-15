import { Component, Input, ViewChild } from '@angular/core';
import { Banner } from '@app/common/interfaces/banner.inteface';
import { interval } from 'rxjs';

@Component({
  selector: 'app-banner-desktop',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerDesktopComponent {

  @Input() information!: Banner[];

  @Input() velocity!: number;

  @ViewChild('slide', { static: true }) slide!: any;

  bannerState = 0;

  ngOnInit(): void {
    interval(this.velocity).subscribe(() => {
      this.next()
    });
  }

  changeBanner(pos: number) {
    this.bannerState = pos
    this.showBanner(pos)
  }

  showBanner(pos: number) {
    const banner: HTMLElement = this.slide.nativeElement.children[pos]
    const banners: HTMLElement[] = this.slide.nativeElement.children
    Array.from(banners).map((item: HTMLElement) => {
      item.setAttribute('style', '');
    })
    banner.setAttribute('style', `transform: translateX(0); opacity: 1;`);
  }

  next() {
    if (this.bannerState < this.information.length - 1)
      this.bannerState++
    else
      this.bannerState = 0
    this.showBanner(this.bannerState)
  }
}
