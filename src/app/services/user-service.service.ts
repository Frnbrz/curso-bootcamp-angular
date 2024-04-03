import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

const URL = 'https://jsonplaceholder.typicode.com/users/'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject(HttpClient);
  constructor() { }

  getUsers(id: number) {
    return this.http.get(`${URL}${id}`)
  }
}
