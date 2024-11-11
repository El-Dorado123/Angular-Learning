import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit{
  name:string=''
  parent:string=''
@Input() item:number=0;
@Input() item1:string='';
@Input() func!:any;
@Output() notify2=new EventEmitter<string>();
constructor(){}
ngOnInit(): void {
  this.name=this.func()
  console.log(this.func())
}
senddata()
{
  this.notify2.emit(this.parent)
}
getdata(name:any){
  this.parent=name
}

}
