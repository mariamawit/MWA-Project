import {Injectable} from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { RouteserviceService } from "./routeservice.service";

@Injectable()
export class MyGuard implements CanActivate{

    constructor(private db: RouteserviceService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
        console.log(route.params.id);
        
            if (!this.db.isIDAvailable(route.params.id)){
                console.log("error");
              this.router.navigate(['error']);
              return false;
            }
        
        return true;
    }
}


