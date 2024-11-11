import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsdinrPipe } from './pipes/usdinr.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsdinrPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custompipe';
}
