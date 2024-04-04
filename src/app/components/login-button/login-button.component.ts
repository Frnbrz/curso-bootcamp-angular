import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss',
})
export class LoginButtonComponent {
  router = inject(Router);
  token = window.localStorage.getItem('token') || '';
  text = this.token ? 'Logout' : 'Login';
  constructor() { }

  handleClick(): void {
    if (this.token) {
      window.localStorage.removeItem('token')
      window.location.reload()
    } else {
      this.router.navigate(['/login'])
    }
  }
}
