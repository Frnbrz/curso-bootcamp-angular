import { AsyncPipe, JsonPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { UsersServiceService } from '../../services/users-service.service'

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss',
})
export class ContactsPageComponent {
  usersService = inject(UsersServiceService);

  data$: Observable<any> = this.usersService.getUsers();
}
