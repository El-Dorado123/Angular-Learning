import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-components',
  standalone: true,
  imports: [],
  templateUrl: './child-components.component.html',
  styleUrl: './child-components.component.css'
})
export class ChildComponentsComponent {

  @Output() updateDataEvent=new EventEmitter<string>();
}
