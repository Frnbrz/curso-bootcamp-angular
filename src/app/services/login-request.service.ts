import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LoginRequestService {
  http = inject(HttpClient);
  loginRequest() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
