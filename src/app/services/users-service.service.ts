import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'


const URL = 'https://jsonplaceholder.typicode.com/users'

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private http = inject(HttpClient);
  constructor() { }

  getUsers() {
    return this.http.get(URL)
  }
}
