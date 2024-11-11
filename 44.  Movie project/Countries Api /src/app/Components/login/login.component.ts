import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, NgModel, NgModelGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



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
  userloginregister:string|string='register'
  loginuserData:loginModel=new loginModel();
  registeredUsersData:registerModel=new registerModel()
  
  constructor(private authdata:AuthService,private router:Router){}
  ngOnInit(): void {
    this.login=this.authdata.login_check;
  }
  registeruser(){
    this.userloginregister='register'

  }
  onLogin(){
    this.loginuserData.email=this.lloginForm.value.useremail,
    this.loginuserData.password=this.lloginForm.value.userpassword
    const localuser=localStorage.getItem('localData');
    if(localuser!=null){
      const localData=JSON.parse(localuser);
      const userexist=localData.find((item:loginModel)=>item.email==this.loginuserData.email&&item.password==this.loginuserData.password)
      if(userexist){
        this.router.navigate(['home'])
      }else
        this.err=true;
    }
  }
  
  Loginuser(){
    this.userloginregister='login'
    
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
  lloginForm=new FormGroup({
    useremail:new FormControl('',[Validators.required]),
    userpassword:new FormControl('',[Validators.required,Validators.email])
  })

  onSubmit(){
    this.registeredUsersData.name=this.loginForm.value.username,
    this.registeredUsersData.email=this.loginForm.value.useremail,
    this.registeredUsersData.password=this.loginForm.value.userpassword
    // console.warn(this.loginForm.value)
    const localuser=localStorage.getItem('localData');
    if(localuser!=null){
      const localData=JSON.parse(localuser);
      const userexist=localData.find((item:registerModel)=>item.name==this.registeredUsersData.name&&item.email==this.registeredUsersData.email)
      if(!userexist && this.registeredUsersData.email != ''){
      localData.push(this.registeredUsersData)
      localStorage.setItem('localData',JSON.stringify(localData))
      this.router.navigate(['home'])
      }else
        this.err=true;
    }else{
      if(this.registeredUsersData.email != ''){
        const localData=[]
      localData.push(this.registeredUsersData)
      localStorage.setItem('localData',JSON.stringify(localData))
      this.router.navigate(['home'])
      }else
      this.err=true;
    }
  }
  
}

export class registerModel{
  name:any;
  email:any;
  password:any;
  constructor(){
    this.name=''
    this.email=''
    this.password=''
  }
} 
export class loginModel{
  email:any;
  password:any;
  constructor(){
    this.email=''
    this.password=''
  }
} 