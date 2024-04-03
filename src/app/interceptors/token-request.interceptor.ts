import { HttpInterceptorFn } from '@angular/common/http'


export const tokenRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token')
  const reqWithToken = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  })
  return next(reqWithToken)
}
