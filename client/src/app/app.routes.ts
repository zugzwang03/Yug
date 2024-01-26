import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: "studentLogin", component: StudentLoginComponent }
];
