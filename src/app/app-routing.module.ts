import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '@core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        data: {
          title: 'titles.home'
        },
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'us',
        data: {
          title: 'titles.us'
        },
        loadChildren: () => import('./modules/us/us.module').then(m => m.UsModule)
      },
      {
        path: 'services',
        data: {
          title: 'titles.services'
        },
        loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'products',
        data: {
          title: 'titles.products'
        },
        loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        data: {
          title: 'titles.contact'
        },
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
    ]
  },
  {
    path: 'saionline',
    data: {
      title: 'tiles.saionline',
    },
    loadChildren: () => import('./modules/saionline/saionline.module').then(m => m.SaionlineModule)
  },
  {
    path: '**',
    data: {
      title: 'titles.not_found',
    },
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
