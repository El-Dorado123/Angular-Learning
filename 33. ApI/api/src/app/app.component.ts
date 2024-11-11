import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserdataService } from './services/userdata.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
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
}
