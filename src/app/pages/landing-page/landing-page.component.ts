import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../components/home-section/home-section.component';
import { WhoWeAreSectionComponent } from '../../components/who-we-are-section/who-we-are-section.component';
import { OurExpertiseComponent } from "../../components/our-expertise/our-expertise.component";
import { SliderComponent } from "../../components/slider/slider.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HomeSectionComponent, WhoWeAreSectionComponent, OurExpertiseComponent, SliderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
