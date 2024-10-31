import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../components/home-section/home-section.component';
import { WhoWeAreSectionComponent } from '../../components/who-we-are-section/who-we-are-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HomeSectionComponent, WhoWeAreSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
