import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  name:any;
  email:any;
  password:any;
  err:boolean=false;
  login:boolean=false;
  
  constructor(private authdata:AuthService,private router:Router){}
  ngOnInit(): void {
    this.login=this.authdata.login_check;
  }

  get()
  {
    return this.authdata.login_check
  }
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    useremail:new FormControl('',[Validators.required]),
    userpassword:new FormControl('',[Validators.required,Validators.email])
  })
  onSubmit(){
    this.name=this.loginForm.value.username,
    this.email=this.loginForm.value.useremail,
    this.password=this.loginForm.value.userpassword
    this.check()
  }
  check(){
    if(this.name===this.authdata.name && this.email===this.authdata.email&& this.password===this.authdata.password)
      {
      this.err=false;
      this.router.navigate(['home'])
    }
    else
      this.err=true;
  }
  
}
