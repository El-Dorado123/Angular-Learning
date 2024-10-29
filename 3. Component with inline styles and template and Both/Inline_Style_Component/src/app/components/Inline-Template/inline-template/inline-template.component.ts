import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `
    <h2 class="inlineTemplate">Component with Inline Template</h2>
    <p>
      inline-template works!
    </p>
  `,
  styleUrl: './inline-template.component.css'
})
export class InlineTemplateComponent {

}
