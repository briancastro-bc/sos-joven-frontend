import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMobileComponent } from './components/navbar/mobile/navbar.mobile.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerDesktopComponent } from './components/banner/desktop/banner.component';
import { NavbarDesktopComponent } from './components/navbar/desktop/navbar.desktop.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarMobileComponent,
    BannerDesktopComponent,
    BannerComponent,
    NavbarDesktopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    BannerDesktopComponent,
    BannerComponent
  ]
})
export class SharedModule { }
