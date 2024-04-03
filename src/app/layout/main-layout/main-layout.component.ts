import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, ToolBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
