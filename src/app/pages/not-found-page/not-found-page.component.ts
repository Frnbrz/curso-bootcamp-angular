import { Component } from '@angular/core'
import { LinkCustomComponent } from '../../components/link-custom/link-custom.component'

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [LinkCustomComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {

}
