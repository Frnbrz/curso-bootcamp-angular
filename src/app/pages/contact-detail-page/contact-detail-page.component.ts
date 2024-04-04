import { Component, inject, Input, OnInit } from '@angular/core'
import { CustomCardComponent } from '../../components/custom-card/custom-card.component'
import { UserServiceService } from '../../services/user-service.service'

@Component({
  selector: 'app-contact-detail-page',
  standalone: true,
  imports: [CustomCardComponent],
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss',
})
export class ContactDetailPageComponent implements OnInit {
  @Input('id') userId: string = '';
  private userServuce = inject(UserServiceService);
  user: any


  ngOnInit() {
    this.loadUser(Number(this.userId))
  }

  loadUser(id: number) {
    this.userServuce.getUsers(id)
      .subscribe((user: any) => {
        this.user = user
      })


  }

}




