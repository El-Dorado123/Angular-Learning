import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  componentName='user'
  sum(a:number,b:number){
    return a+b;
  }
}
