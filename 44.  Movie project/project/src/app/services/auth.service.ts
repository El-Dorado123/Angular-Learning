import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  password:string='shivam@123'
  email:string='shivam@gmail.com'
  name:string='shivam'
  login:string='Login'
  login_check:boolean=false

  url='https://restcountries.com/v3.1/all'
  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url)
  }
}
