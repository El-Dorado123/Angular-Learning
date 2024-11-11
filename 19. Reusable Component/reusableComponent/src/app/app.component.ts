import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from "./components/child-component/child-component.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponentComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reusableComponent';
  userDetails=[
    {name:'shivam',email:'shivam@gmail.com'},
    {name:'vipul',email:'vipul@gmail.com'},
    {name:'shantanu',email:'shantanu@gmail.com'},
    {name:'gautam',email:'gautam@gmail.com'}
  ]
}
