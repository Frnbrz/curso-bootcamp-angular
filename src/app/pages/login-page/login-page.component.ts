import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginFormComponent } from '../../components/login-form/login-form.component'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  token: string | null = window.localStorage.getItem('token') || null;
  router = inject(Router);
  constructor() { }

  ngOnInit(): void {
    if (
      this.token !== null
    ) {
      this.router.navigate(['/contacts'])
    }

  }
}
