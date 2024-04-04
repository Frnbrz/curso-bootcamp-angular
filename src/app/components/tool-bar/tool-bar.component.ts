import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { LinkCustomComponent } from '../link-custom/link-custom.component'
import { LoginButtonComponent } from '../login-button/login-button.component'

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LoginButtonComponent,
    LinkCustomComponent
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {
  isLoggedIn = window.localStorage.getItem('token') || '';

}
