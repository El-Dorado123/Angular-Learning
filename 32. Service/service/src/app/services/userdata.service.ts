import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:'Anil',age:20,email:'anil@test.com'},
      {name:'sam',age:25,email:'sam@test.com'},
      {name:'peter',age:23,email:'peter@test.com'},
    ]
  }
}
