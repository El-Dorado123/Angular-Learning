import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,DatePipe,SlicePipe,JsonPipe,DecimalPipe,CurrencyPipe,TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe';
  data='Angular Pipes'
  date=new Date();
  user:{name:string,phone:number}={name:"shivam",phone:9487654321}
}
