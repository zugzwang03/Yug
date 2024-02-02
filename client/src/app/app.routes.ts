import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { Test1Component } from './test-1/test-1.component';

export const routes: Routes = [
    { path: "studentLogin", component: StudentLoginComponent },
    { path: "landing-page", component: LandingPageComponent },
    { path: "studentRegistration", component: StudentRegistrationComponent },
    { path: "test-1", component: Test1Component}
];
