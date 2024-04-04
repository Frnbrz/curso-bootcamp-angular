import { AsyncPipe, JsonPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [MatButtonModule, AsyncPipe, JsonPipe],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss',
})
export class LoginButtonComponent {
  router = inject(Router);
  token = window.localStorage.getItem('token') || '';
  isLoggedIn = this.token !== '' ? true : false;
  constructor() { }

  handleClick(): void {
    if (this.token) {
      window.localStorage.removeItem('token')
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/login'])
    }
  }
}
