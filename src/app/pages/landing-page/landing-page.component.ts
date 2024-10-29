import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../components/home-section/home-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HomeSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
