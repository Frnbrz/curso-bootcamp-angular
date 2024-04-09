import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-on-push',
  standalone: true,
  imports: [],
  templateUrl: './on-push.component.html',
  styleUrl: './on-push.component.scss'
})
export class OnPushComponent implements OnInit {
  segundos: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.segundos++
      console.log(this.segundos)
    }, 1000)
  }
}
