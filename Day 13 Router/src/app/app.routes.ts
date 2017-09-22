import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from './student.component';
import { ProfileComponent } from './profile.component';
import { HomepageComponent } from './homepage.component';
import { MyGuard } from './activate.guard';
import { MyOtherGuard } from './deactivate.guard';
import { ErrorComponent} from './error/error.component';
//import { GuardsComponent } from "./guards/guards.component";
import { RouteserviceService } from './routeservice.service';



const MY_ROUTES: Routes = [
     { path: '', component: HomepageComponent },
     { path: 'student', component: StudentsComponent },
     { path: 'error', component: ErrorComponent },
     { path: 'profile/:id', component: ProfileComponent, canActivate: [MyGuard], canDeactivate: [MyOtherGuard] },
     { path: '**', redirectTo : 'error' }
     
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
