import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeMobileComponent } from './mobile/home.mobile.component';
import { HomeDesktopComponent } from './desktop/desktop.component';

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
  ]
})
export class HomeModule { }
