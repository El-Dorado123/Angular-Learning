import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveforms';
  loginForm = new FormGroup({
    user: new FormControl(''),
    password : new FormControl('') 
  })
  loginuser(){
    console.log(this.loginForm.value)
  }
}
