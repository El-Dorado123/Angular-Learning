import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // usersData:any=[]
  login:string='Login'
  login_check:boolean=false

  url='https://restcountries.com/v3.1/all'
  constructor(private http:HttpClient) { }
  // signup(dataofuser:object){
  //   this.usersData.name=dataofuser.name,
  //   this.usersData.email=dataofuser.email,
  //   this.usersData.password=dataofuser.password,
  // }
  users(){
    return this.http.get(this.url)
  }
}
