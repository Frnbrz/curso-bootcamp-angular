import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'


const URL = 'https://jsonplaceholder.typicode.com/users'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private http = inject(HttpClient);
  constructor() { }

  getUsers() {
    return this.http.get(URL)
  }

  getUser(id: number) {
    return this.http.get(`${URL}/${id}`)
  }
}
