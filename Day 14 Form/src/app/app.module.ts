import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormserviceService } from './formservice.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DatadrivenComponent } from './datadriven/datadriven.component';

@NgModule({
  declarations: [
    AppComponent,
    DatadrivenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
