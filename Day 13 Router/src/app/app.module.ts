import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './student.component';
import { HomepageComponent } from './homepage.component';
import { RouteserviceService } from './routeservice.service';
import { myRoutes } from './app.routes';
import { ProfileComponent } from './profile.component';
import { MyGuard } from './activate.guard';
import { MyOtherGuard } from './deactivate.guard';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomepageComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [RouteserviceService, MyGuard, MyOtherGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
