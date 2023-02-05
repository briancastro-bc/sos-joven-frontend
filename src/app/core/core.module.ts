import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { AppInitializerService } from './initializer/app-initializer.service';

export function AppInitializerFactory(appInitializerService: AppInitializerService): () => Observable<void> {
  return () => appInitializerService.load().pipe(
    tap(_ => {
      console.log('Loaded');
    })
  );
}

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    AppInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitializerFactory,
      deps: [AppInitializerService],
      multi: true
    }
  ]
})
export class CoreModule { }
