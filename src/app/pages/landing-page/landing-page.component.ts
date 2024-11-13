import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../components/home-section/home-section.component';
import { WhoWeAreSectionComponent } from '../../components/who-we-are-section/who-we-are-section.component';
import { OurExpertiseComponent } from '../../components/our-expertise/our-expertise.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { WhoWeHaveWorkedWithComponent } from '../../components/who-we-have-worked-with/who-we-have-worked-with.component';
import { FeaturedProjectsComponent } from '../../components/featured-projects/featured-projects.component';
import { OurLocationComponent } from '../../components/our-location/our-location.component';
import { GetInTouchSectionComponent } from '../../components/get-in-touch-section/get-in-touch-section.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { DotNavigationComponent } from "../../components/dot-navigation/dot-navigation.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HomeSectionComponent,
    WhoWeAreSectionComponent,
    OurExpertiseComponent,
    SliderComponent,
    WhoWeHaveWorkedWithComponent,
    FeaturedProjectsComponent,
    OurLocationComponent,
    GetInTouchSectionComponent,
    FooterComponent,
    DotNavigationComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
