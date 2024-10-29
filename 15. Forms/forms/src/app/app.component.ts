import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  userData:any={}

  setData(data:NgForm){
    console.warn(data)
    this.userData=data;
    // this.name=this.userData.user;
    // this.email=this.userData.email;
    // this.phone=this.userData.phone;
  }
  
}
