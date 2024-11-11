import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit{
  user:string=''
  parent:string=''
  @Input() data:number=0;
  @Input() name:string='';
  @Input() func1!:any;
  constructor(){
  }
  ngOnInit(): void {
    this.user=this.func1()
  }
  getdata(data:string){
    this.parent=data
  }
  @Output() notify1=new EventEmitter<string>();
  senddata(){
    this.notify1.emit(this.parent);
  }
}
