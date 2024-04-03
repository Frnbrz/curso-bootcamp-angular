import { Component } from '@angular/core'
import { LinkCustomComponent } from '../../components/link-custom/link-custom.component'
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ToolBarComponent, LinkCustomComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent { }
