import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaionlineComponent } from './saionline.component';

const routes: Routes = [{ path: '', component: SaionlineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaionlineRoutingModule { }
