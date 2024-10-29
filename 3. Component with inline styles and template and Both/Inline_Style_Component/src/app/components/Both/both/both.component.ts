import { Component } from '@angular/core';

@Component({
  selector: 'app-both',
  template: `
    <h2 class="both">Component with Inline Style and Inline Template</h2>
    <p>
      both works!
    </p>
  `,
  styles: `
    .both{color:blue}
  `
})
export class BothComponent {

}
