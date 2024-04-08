import { Component } from '@angular/core'
import { UserTableComponent } from '../../components/user-table/user-table.component'

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {

}
