import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UserServiceService } from '../../services/user-service.service'

@Component({
  selector: 'app-contact-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss',
})
export class ContactDetailPageComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private userServuce = inject(UserServiceService);
  user: any


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.loadUser(params['id'])
    })
  }

  loadUser(id: number) {
    this.userServuce.getUsers(id)
      .subscribe((user: any) => {
        this.user = user
      })


  }

}




