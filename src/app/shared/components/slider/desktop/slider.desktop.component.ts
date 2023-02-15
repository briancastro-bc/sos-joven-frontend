import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-desktop',
  templateUrl: './slider.desktop.component.html',
  styleUrls: ['./slider.desktop.component.scss']
})
export class SliderDesktopComponent implements OnInit {

  @Input() brands!: string[]

  slideConfig = {
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
  };

  ngOnInit(): void {
    // console.log();
  }

  // removeSlide() {
  //   this.brands.length = this.brands.length - 1;
  // }

  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }

  // afterChange(e: any) {
  //   console.log('afterChange');
  // }

  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }
}
