import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
  parent:string=''
  data:number=100;
  name:string='shivam'
  Hello=()=>{
    return "Hello vipul laalla"
  }
  getdata(da:string){
    this.parent=da
  }
}
