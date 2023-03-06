import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeMobileComponent } from './mobile/home.mobile.component';
import { HomeDesktopComponent } from './desktop/home.desktop.component';
import { HttpClientModule } from '@angular/common/http';
import { InputDesktopComponent } from '@app/shared/components/input/desktop/input.desktop.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeMobileComponent,
    HomeDesktopComponent,
  ],
  imports: [
    InputDesktopComponent,
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class HomeModule { }
