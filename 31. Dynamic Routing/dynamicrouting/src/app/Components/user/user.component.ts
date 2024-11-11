import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css' 
})
export class UserComponent implements OnInit{
  userid:any;
  // constructor(private route:ActivatedRoute){}
  private route = inject(ActivatedRoute)
  ngOnInit(): void {
    this.userid=this.route.snapshot.paramMap.get('id')
    console.warn('user id is : ',this.userid)
  }
}
