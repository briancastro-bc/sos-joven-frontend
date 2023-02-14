import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateCutModule } from 'ngx-translate-cut';

import { NavbarMobileComponent } from './components/navbar/mobile/navbar.mobile.component';
import { NavbarDesktopComponent } from './components/navbar/desktop/navbar.desktop.component';
import { FooterMobileComponent } from './components/footer/mobile/footer.mobile.component';
import { BannerDesktopComponent } from './components/banner/desktop/banner.component';
import { AboutDesktopComponent } from './components/about/desktop/about.desktop.component';
import { AboutComponent } from './components/about/about.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

/**
 *
 * Directives section
 *
 */
import { RippleDirective } from './directives';
import { SidebarDirective } from './components/sidebar/sidebar.directive';
import { IllustrationComponent } from './components/illustration/illustration.component';

@NgModule({
  declarations: [
    IllustrationComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterMobileComponent,
    BannerDesktopComponent,
    AboutDesktopComponent,
    AboutComponent,
    SidebarComponent,
    SidebarDirective,
    RippleDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgxTranslateCutModule,
  ],
  exports: [
    IllustrationComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterMobileComponent,
    AboutDesktopComponent,
    BannerDesktopComponent,
    SidebarComponent,
    SidebarDirective,
    RippleDirective,
    TranslateModule,
    NgxTranslateCutModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
