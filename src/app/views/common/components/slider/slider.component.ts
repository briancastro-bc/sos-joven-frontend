import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface SliderConfiguration {
  interval: number;
  elementsToShow: number;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SliderComponent {

  @Input('config') sliderConfig!: SliderConfiguration;
}
