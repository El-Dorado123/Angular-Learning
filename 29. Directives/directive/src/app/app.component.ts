import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedelDirective } from './directives/redel.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RedelDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';
}
