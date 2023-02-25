import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsDesktopComponent } from './desktop/products.desktop.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDesktopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
