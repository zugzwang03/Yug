import { Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TestComponent } from './test/test.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { VideoTutorialsComponent } from './video-tutorials/video-tutorials.component';
import { ScholarshipPortalComponent } from './scholarship-portal/scholarship-portal.component';
import { InformationalVideosComponent } from './informational-videos/informational-videos.component';
import { ExpertGuidanceComponent } from './expert-guidance/expert-guidance.component';

export const routes: Routes = [
    { path: "studentLogin", component: StudentLoginComponent },
    { path: "landing-page", component: LandingPageComponent },
    { path: "studentRegistration", component: StudentRegistrationComponent },
    { path: "test", component: TestComponent },
    { path: "score-card", component: ScoreCardComponent },
    { path: "studentInfo", component: StudentInfoComponent },
    { path: "image-tutorials", component: TutorialsComponent },
    { path: "video-tutorials", component: VideoTutorialsComponent },
    { path: "scholarship-portal", component: ScholarshipPortalComponent },
    { path: "informational-videos", component: InformationalVideosComponent },
    {
        path: "expert-guidance", component: ExpertGuidanceComponent
    }
];
