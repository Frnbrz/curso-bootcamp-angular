import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class LoginRequestService {
  http = inject(HttpClient);
  loginRequest(email: string, password: string): Observable<any> {
    return this.http.post('https://nest-frnbrz-api.onrender.com/api/v1/auth/login', {
      email,
      password
    },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
