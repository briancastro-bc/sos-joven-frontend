import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarMobileComponent } from './components/navbar/mobile/navbar.mobile.component';
import { FooterMobileComponent } from './components/footer/mobile/footer.mobile.component';
import { BannerDesktopComponent } from './components/banner/desktop/banner.component';
import { NavbarDesktopComponent } from './components/navbar/desktop/navbar.desktop.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutDesktopComponent } from './components/about/desktop/about.desktop.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterMobileComponent,
    BannerDesktopComponent,
    AboutDesktopComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterMobileComponent,
    AboutDesktopComponent,
    BannerDesktopComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
