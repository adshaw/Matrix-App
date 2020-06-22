import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TextAnimationModule} from './shared/text-animation/text-animation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        TextAnimationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
