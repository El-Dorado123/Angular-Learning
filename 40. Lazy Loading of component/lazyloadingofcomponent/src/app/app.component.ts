import { Component,ViewContainerRef } from '@angular/core';
// ComponentFactoryResolver
import { AdminlistComponent } from './components/adminlist/adminlist.component';
import { UserlistComponent } from './components/userlist/userlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lazyloadingofcomponent';
  constructor(private viewContainer : ViewContainerRef){}
  LoadAdmin(){
    this.viewContainer.clear();
    const componentRef=this.viewContainer.createComponent(AdminlistComponent)
    // const instance=componentRef.instance;
  }
  LoadUser(){
    this.viewContainer.clear();
    const componentRef=this.viewContainer.createComponent(UserlistComponent)
    // const instance1=componentRef.instance;
  }
}
