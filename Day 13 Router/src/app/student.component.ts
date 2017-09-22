import { Component, OnInit } from '@angular/core';
import { RouteserviceService } from './routeservice.service';

@Component({
  selector: 'app-students',
  template: `    
      <ul>
      <li *ngFor="let items of data"><a href ="/profile/{{items.id}}">{{items.name}}</a></li>
      </ul>
    
  `,
  styles: []
})

export class StudentsComponent  {
  data = {};
  constructor(RouteserviceService: RouteserviceService) { 
    this.data = RouteserviceService.getData();
  }

}
