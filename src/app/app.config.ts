import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import * as Sentry from '@sentry/angular';
import { environment } from '../environments/environment';

const providers: ApplicationConfig['providers'] = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideHttpClient(),
];

if (environment.sentryEnabled && environment.sentryDsn) {
  providers.push({
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({ showDialog: false }),
  });
}

export const appConfig: ApplicationConfig = { providers };
