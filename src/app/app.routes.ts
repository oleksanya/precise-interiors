import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { JoinTheTeamPageComponent } from './pages/join-the-team-page/join-the-team-page.component';
import { PastProjectPageComponent } from './pages/past-project-page/past-project-page.component';
import { WorkingProcessPageComponent } from './pages/working-process-page/working-process-page.component';

export const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'who-we-are', component: LandingPageComponent },
  { path: 'join-team', component: JoinTheTeamPageComponent },
  { path: 'our-projects', component: PastProjectPageComponent },
  { path: 'working-process', component: WorkingProcessPageComponent },
];
