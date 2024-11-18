import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { JoinTheTeamPageComponent } from './pages/join-the-team-page/join-the-team-page.component';
import { PastProjectPageComponent } from './pages/past-project-page/past-project-page.component';

export const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'join-team', component: JoinTheTeamPageComponent },
  { path: 'our-projects', component: PastProjectPageComponent },
];
