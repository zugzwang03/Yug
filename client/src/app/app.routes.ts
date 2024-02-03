import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    { path: "studentLogin", component: StudentLoginComponent },
    { path: "landing-page", component: LandingPageComponent },
    { path: "studentRegistration", component: StudentRegistrationComponent },
    { path: "test", component: TestComponent}
];
