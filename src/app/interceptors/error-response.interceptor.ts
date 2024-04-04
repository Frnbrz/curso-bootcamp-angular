import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http"
import { catchError, throwError } from "rxjs"

export const errorResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError(
      handleErrorResponse
    )
  )
}

function handleErrorResponse(error: HttpErrorResponse) {
  console.log('Error', error)
  return throwError(() => error)
}
