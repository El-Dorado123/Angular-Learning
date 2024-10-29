import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'function';
  getName(){
    return "shivam";
  }
  getName1(name:any){
    return name;
  }
  getName2(){
    console.log("SHIVAM")
  }
  getNumber()
  {
    return 10;
  }
  getNumber1(num:Number){
    return num;
  }
}
