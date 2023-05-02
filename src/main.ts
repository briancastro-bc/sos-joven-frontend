import { importProvidersFrom, isDevMode } from '@angular/core';
import {
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  HttpBackend,
  HttpClient,
  provideHttpClient
} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { bootstrapApplication } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideStore } from '@ngrx/store';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { environment } from '@environment/environment';

import { AppComponent } from '@app/app.component';
import { APPLICATION_ROUTES } from '@app/app.routes';

export function HttpLoaderFactory(handler: HttpBackend): TranslateHttpLoader {
  const http = new HttpClient(handler);
  return new TranslateHttpLoader(http);
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: 'BACKEND_URL',
      useValue: environment.baseUrl,
    },
    {
      provide: 'APPLICATION_VERSION',
      useValue: environment.version,
    },
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000',
      }),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpBackend]
        },
        defaultLanguage: 'es',
        useDefaultLang: true
      }),
    ),
    provideHttpClient(),
    provideRouter(
      APPLICATION_ROUTES,
      withPreloading(PreloadAllModules),
    ),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
  ]
})
  .catch((err: Error) => console.error(`Error on application bootstrap: ${err.name}\n`, err));
