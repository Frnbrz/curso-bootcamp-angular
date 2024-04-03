import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { LoginButtonComponent } from '../login-button/login-button.component'

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LoginButtonComponent,
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent { }
