import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { validateHeaderValue } from 'http';
import { NgIf } from '@angular/common';
import { emit } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactiveformvalidation';
  loginForm=new FormGroup({
    user : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
    // email: new FormControl('',[Validators.required,Validators.email])
    email: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9._]+$')])
  })
  loginuser(){
    console.log(this.loginForm.value)
  }

  get user(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }

  get email(){
    return this.loginForm.get('email')
  }
}
