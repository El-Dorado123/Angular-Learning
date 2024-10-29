import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loop';
  numArray = [1,2,3,4,5,6,7,8,9,10];
  charArray = ['a','e','i','o','u'];
  users=[
    {name:"shivam",email:"shivam@gmail.com",phone:'12345678910',socialAccount:['Instagram',"facebook",'Youtube']},
    {name:"vipul",email:"vipul@gmail.com",phone:'12345678910',socialAccount:['Instagram',"facebook",'Youtube','Snapchat']},
    {name:"shantanu",email:"shantanu@gmail.com",phone:'12345678910',socialAccount:['Instagram',"facebook",'Youtube']},
  ]
}
