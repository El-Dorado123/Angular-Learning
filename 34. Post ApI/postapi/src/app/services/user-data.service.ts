import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  url='https://jsonplaceholder.typicode.com/todos/'
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url)
  }
}
