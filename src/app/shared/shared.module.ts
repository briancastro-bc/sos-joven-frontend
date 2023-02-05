import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMobileComponent } from './components/navbar/mobile/navbar.mobile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarMobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
