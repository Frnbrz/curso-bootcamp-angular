import { Component } from '@angular/core'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {

}
