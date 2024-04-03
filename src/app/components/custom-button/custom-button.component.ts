import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input() url: string = '';
}
