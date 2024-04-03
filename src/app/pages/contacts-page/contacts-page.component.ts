import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component'
import { UsersServiceService } from '../../services/users-service.service'

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss',
})
export class ContactsPageComponent implements OnInit {
  private usersService = inject(UsersServiceService);
  router = inject(Router);
  users: any[] = []

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.usersService.getUsers()
      .subscribe((users: any) => {
        this.users = users
      })
  }



  moreUserDetails(id: string) {
    this.router.navigate(['/contact', id])
  }
}
