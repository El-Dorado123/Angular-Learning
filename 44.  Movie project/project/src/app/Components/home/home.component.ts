import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users:any;
  objectEntries: [string, any][] = []; 
  language:[string,any][]=[]

  constructor(private userdata:AuthService){
    userdata.users().subscribe((data)=>{
      this.users=data
      this.objectEntries = Object.entries(data);
      console.log(this.users)
      this.language=Object.entries(this.objectEntries[0][1].languages)
      console.log(this.language)
    })
  }
}
