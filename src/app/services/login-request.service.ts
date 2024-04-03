import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LoginRequestService {
  http = inject(HttpClient);
  loginRequest() {
    return this.http.post('https://nest-frnbrz-api.onrender.com/api/v1/auth/login', {
      email: 'a@a.com',
      password: '123'
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
