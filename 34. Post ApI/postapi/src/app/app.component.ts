import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { UserdataService } from './services/userdata.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { UserdataService } from './services/user-data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  // providers : [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';
  users:any;

  constructor(private userdata:UserdataService){
    userdata.users().subscribe((data)=>{
      this.users=data
      console.log(this.users)
    }) 
  }
  getUsersFormData(data:any){
    console.log(data)
  }
}
