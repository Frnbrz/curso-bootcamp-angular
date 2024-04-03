import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ToolBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
