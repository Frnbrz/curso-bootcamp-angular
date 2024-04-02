import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {
  token = window.localStorage.getItem('token') || ''
  text = this.token ? 'Logout' : 'Login'
  constructor() { }

  handleClick(): void {
    if (this.token) {
      window.localStorage.removeItem('token')
      window.location.reload()
    } else {
      window.localStorage.setItem('token', '1234')
    }
  }

}
