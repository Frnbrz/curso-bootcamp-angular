import { AsyncPipe, JsonPipe } from '@angular/common'
import { Component, inject, OnChanges, signal } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [MatButtonModule, AsyncPipe, JsonPipe],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss',
})
export class LoginButtonComponent implements OnChanges {
  router = inject(Router);
  token = window.localStorage.getItem('token') || '';
  isLoggedIn = signal<boolean>(this.token === '' ? false : true);

  ngOnChanges(): void {
    this.isLoggedIn.set(this.token === '' ? false : true)
  }

  handleClick(): void {
    if (this.token !== '') {
      window.localStorage.removeItem('token')
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/login'])

    }
  }

  changeLoginStatus(): void {
    this.isLoggedIn.set(false)
  }
}
