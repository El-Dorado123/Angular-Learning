import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineStyleComponent } from './components/Inline-Style/inline-style/inline-style.component';
import { InlineTemplateComponent } from './components/Inline-Template/inline-template/inline-template.component';
import { BothComponent } from './components/Both/both/both.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    BothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
