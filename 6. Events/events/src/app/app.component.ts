import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { warn } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'events';
  getData(val:string){
    console.warn(val)
  }
}
