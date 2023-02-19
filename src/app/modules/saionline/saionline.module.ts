import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaionlineRoutingModule } from './saionline-routing.module';
import { SaionlineComponent } from './saionline.component';


@NgModule({
  declarations: [
    SaionlineComponent
  ],
  imports: [
    CommonModule,
    SaionlineRoutingModule
  ]
})
export class SaionlineModule { }
