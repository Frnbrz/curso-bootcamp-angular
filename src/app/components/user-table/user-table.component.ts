import { Component, inject, OnInit } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { User } from '../../models/users.model'
import { UsersService } from '../../services/users.service'
import { CustomButtonComponent } from '../custom-button/custom-button.component'





@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [MatTableModule, CustomButtonComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit {
  userService = inject(UsersService)
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'];


  public users: User[] = []
  public currentPage: number = 1

  ngOnInit(): void {
    this.loadUsers(this.currentPage)
  }

  loadUsers(page: number) {
    this.userService.getUsers(page).subscribe((users: any) => {
      this.users = users
      console.log(this.users)
    })
  }
}
