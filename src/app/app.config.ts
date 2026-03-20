import { ApplicationConfig, ENVIRONMENT_INITIALIZER, ErrorHandler, inject, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import * as Sentry from '@sentry/angular';
import { environment } from '../environments/environment';
import { GoogleAnalyticsService } from './core/services/google-analytics.service';

const providers: ApplicationConfig['providers'] = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideHttpClient(),
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => inject(GoogleAnalyticsService).init(),
  },
];

if (environment.sentryEnabled && environment.sentryDsn) {
  providers.push({
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({ showDialog: false }),
  });
}

export const appConfig: ApplicationConfig = { providers };
