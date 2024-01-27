import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: "studentLogin", component: StudentLoginComponent },
    { path: 'landing-page', component: LandingPageComponent }
];
