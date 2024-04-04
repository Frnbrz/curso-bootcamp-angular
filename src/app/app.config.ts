import { ApplicationConfig } from '@angular/core'
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router'

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { routes } from './app.routes'
import { errorResponseInterceptor } from './interceptors/error-response.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding(), withViewTransitions()), provideAnimationsAsync(), provideHttpClient(withFetch(), withInterceptors([
    errorResponseInterceptor
  ]))],
}
