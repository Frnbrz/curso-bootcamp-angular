import { Component } from '@angular/core'
import { DetachComponent } from '../../components/detach/detach.component'
import { OnPushComponent } from '../../components/on-push/on-push.component'

@Component({
  selector: 'app-vista-avanzada',
  standalone: true,
  imports: [OnPushComponent, DetachComponent],
  templateUrl: './vista-avanzada.component.html',
  styleUrl: './vista-avanzada.component.scss'
})
export class VistaAvanzadaComponent {

}
