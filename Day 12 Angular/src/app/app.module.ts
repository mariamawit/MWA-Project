import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';
import { ArraycomponentComponent } from './arraycomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperDirective,
    MyvisibilityDirective,
    MycolorDirective,
    ArraycomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
