import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router'
import { LoginRequestService } from '../../services/login-request.service'
import { CustomButtonComponent } from '../custom-button/custom-button.component'


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CustomButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginService = inject(LoginRequestService)
  router = inject(Router)
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  isDisabled = true;

  constructor() { }

  async login() {
    const password: string = this.passwordFormControl.value || ''
    const email: string = this.emailFormControl.value || ''
    this.loginService.loginRequest(email, password).subscribe((data: any) => {
      window.localStorage.setItem('token', data?.token)
      this.router.navigate(['/contacts'])
    })
  }

  handleFormChange() {
    this.isDisabled = !this.emailFormControl.valid || !this.passwordFormControl.valid
  }
}
