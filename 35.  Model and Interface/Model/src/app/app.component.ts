import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface datatype{
  name:string,
  id:number,
  indian:boolean,
  address:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Model';
  getData(){
    const data:datatype ={
      name:'shivam',
      id:100,
      indian:true,
      address: 'delhi'
    }
    return data;
  }
}
