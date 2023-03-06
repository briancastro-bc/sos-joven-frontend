import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactMobileComponent } from './mobile/contact.mobile.component';
import { ContactDesktopComponent } from './desktop/contact.desktop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDesktopComponent } from '@app/shared/components/input/desktop/input.desktop.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactMobileComponent,
    ContactDesktopComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InputDesktopComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class ContactModule { }
