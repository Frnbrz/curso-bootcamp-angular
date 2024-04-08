import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { PaginatedUsers, User } from '../models/users.model'


const BASE_URL = 'https://reqres.in/api/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient);


  constructor() { }

  getUsers(page: number): Observable<User[]> {
    return this.http.get<PaginatedUsers>(BASE_URL, { params: { page: page } })
      .pipe(
        map(response => response.data)
      )
  }
}
