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
import { LoaderComponent } from './components/loader/loader.component';
import { FullscreenSpinnerComponent } from './components/loader/fullscreen-spinner/fullscreen-spinner.component';
import { ProgressbarComponent } from './components/loader/progressbar/progressbar.component';

/**
 *
 * Directives section
 *
 */
import { RippleDirective } from './directives';
import { SidebarDirective } from './components/sidebar/sidebar.directive';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { SliderDesktopComponent } from './components/slider/desktop/slider.desktop.component';
import { SliderComponent } from './components/slider/slider.component';
import { BusinessModuleCardComponent } from './components/business-module-card/business-module-card.component';
import { AsParagraphPipe } from './pipes/as-paragraph.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CarrowselDesktopComponent } from './components/carrowsel/carrowsel.desktop.component';

// reCaptcha
import { RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '@environment/environment.dev';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCaptchaModule } from 'ngx-captcha';

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
    SliderComponent,
    BusinessModuleCardComponent,
    AsParagraphPipe,
    LoaderComponent,
    FullscreenSpinnerComponent,
    ProgressbarComponent,
    CarrowselDesktopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgxTranslateCutModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    RecaptchaModule,
    NgxCaptchaModule
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
    BusinessModuleCardComponent,
    AsParagraphPipe,
    LoaderComponent,
    ReactiveFormsModule,
    CarrowselDesktopComponent,
    NgxCaptchaModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ]
})
export class SharedModule { }
