import { Component, inject, Input, OnInit } from '@angular/core'
import { CustomCardComponent } from '../../components/custom-card/custom-card.component'
import { ContactsService } from '../../services/contacts.service'

@Component({
  selector: 'app-contact-detail-page',
  standalone: true,
  imports: [CustomCardComponent],
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss',
})
export class ContactDetailPageComponent implements OnInit {
  @Input('id') userId: string = '';
  private contactService = inject(ContactsService);
  user: any


  ngOnInit() {
    this.loadUser(Number(this.userId))
  }

  loadUser(id: number) {
    this.contactService.getUser(id)
      .subscribe((user: any) => {
        this.user = user
      })


  }

}




