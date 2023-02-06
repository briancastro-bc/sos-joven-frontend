import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeMobileComponent } from './mobile/home.mobile.component';
import { HomeDesktopComponent } from './desktop/desktop.component';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent,
    HomeMobileComponent,
    HomeDesktopComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class HomeModule { }
