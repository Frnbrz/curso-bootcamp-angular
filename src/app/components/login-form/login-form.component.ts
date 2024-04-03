import { AsyncPipe, JsonPipe } from '@angular/common'
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
import { Observable } from 'rxjs'
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
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CustomButtonComponent, JsonPipe, AsyncPipe],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginService = inject(LoginRequestService)

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  data$: Observable<any> | undefined

  constructor() { }

  login() {
    this.data$ = this.loginService.loginRequest()
    console.log(this.data$)
  }
}
