import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateCutModule } from 'ngx-translate-cut';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { NavbarMobileComponent } from './components/navbar/mobile/navbar.mobile.component';
import { NavbarDesktopComponent } from './components/navbar/desktop/navbar.desktop.component';
import { FooterMobileComponent } from './components/footer/mobile/footer.mobile.component';
import { BannerDesktopComponent } from './components/banner/desktop/banner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

/**
 *
 * Directives section
 *
 */
import { RippleDirective } from './directives';
import { SidebarDirective } from './components/sidebar/sidebar.directive';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { SliderDesktopComponent } from './components/slider/desktop/slider.desktop.component';

@NgModule({
  declarations: [
    IllustrationComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterMobileComponent,
    BannerDesktopComponent,
    SidebarComponent,
    SidebarDirective,
    RippleDirective,
    SliderDesktopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgxTranslateCutModule,
    SlickCarouselModule,
  ],
  exports: [
    IllustrationComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterMobileComponent,
    BannerDesktopComponent,
    SliderDesktopComponent,
    SidebarComponent,
    SidebarDirective,
    RippleDirective,
    TranslateModule,
    NgxTranslateCutModule,
    SlickCarouselModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
