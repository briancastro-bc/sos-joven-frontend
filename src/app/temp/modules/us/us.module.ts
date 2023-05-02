import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UsRoutingModule } from './us-routing.module';
import { UsComponent } from './us.component';
import { UsMobileComponent } from './mobile/us.mobile.component';
import { UsDesktopComponent } from './desktop/us.desktop.component';


@NgModule({
  declarations: [
    UsComponent,
    UsMobileComponent,
    UsDesktopComponent,
  ],
  imports: [
    CommonModule,
    UsRoutingModule,
    SharedModule,
  ]
})
export class UsModule { }
