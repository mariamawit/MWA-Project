import { Component, OnInit } from '@angular/core';
import { RouteserviceService } from './routeservice.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
//import { ProfileActivateGuard } from ''

@Component({
  selector: 'app-profile',
  template: `
    <ul>
      <li>Name: {{ user.name }} </li>
      <li>User Id: {{ user.studID }} </li>
      <li>Email: {{ user.email }} </li>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  private subscription: Subscription;
  id: number;
  user= {};
  onetimeId: string;
  
  constructor(private activatedRoute: ActivatedRoute, private dbService: RouteserviceService, private router: Router) { 
     activatedRoute.params.subscribe( 
      (param: any) => this.id = param['id']  
        
    )
    this.user = dbService.getData();
    this.user = this.user[this.id -1];
  }
 ngOnInit(){
   
 }
  done = false;
  
  
    onNavigate() {
        this.router.navigate(['/']);
    }
  
    canDeactivate(): Observable<boolean> | boolean {
            if (!this.done) {
                return confirm('Do you want to leave?');
            }
            return true;
        }
  
  }
  


