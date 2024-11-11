import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NgFor } from '@angular/common';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service';
  users:any;
  constructor(private userdata : UserdataService){
      console.log(userdata.users())
      this.users=userdata.users()
  }
}
