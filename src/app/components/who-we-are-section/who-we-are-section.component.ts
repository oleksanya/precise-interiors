import { Component } from '@angular/core';
import { IntersectionObserverDirective } from '../../directives/intersection-observer.directive';

@Component({
  selector: 'app-who-we-are-section',
  standalone: true,
  imports: [IntersectionObserverDirective],
  templateUrl: './who-we-are-section.component.html',
  styleUrl: './who-we-are-section.component.css',
})
export class WhoWeAreSectionComponent {
  isH2Visible = false;
  isDivVisible = false;

  onH2VisibilityChange(isVisible: boolean) {
    if (isVisible) {
      this.isH2Visible = true;
    }
  }

  onDivVisibilityChange(isVisible: boolean) {
    if (isVisible) {
      this.isDivVisible = true;
    }
  }
}
