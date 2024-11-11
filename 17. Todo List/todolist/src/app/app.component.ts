import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  list:any[]=[];
  addTask(item:any){
    if(item.value.length){
      this.list.push({id:this.list.length,task:item.value})
      // console.log(this.list)
      item.value=""
    }
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!=id)
    // console.log(this.list)
  }
}
