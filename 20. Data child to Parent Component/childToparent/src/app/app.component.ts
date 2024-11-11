import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponentsComponent } from "./components/child-components/child-components.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'childToparent';
  data:string=''
  updateData(item:string){
    console.log(item)
    this.data=item
  }
}
