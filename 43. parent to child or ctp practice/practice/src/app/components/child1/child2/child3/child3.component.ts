import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component implements OnInit{
user:string=''
name:string='Shivam'
@Input() child3_data:number=0;
@Input() child3_name:string='';
@Input() func!:any;

@Output() notify= new EventEmitter<string>();
senddata(){
  this.notify.emit(this.name);
}

ngOnInit(): void {
  this.user=this.func()
}
}
