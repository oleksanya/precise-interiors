import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dot-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dot-navigation.component.html',
  styleUrl: './dot-navigation.component.css',
})
export class DotNavigationComponent {
  hoveredSection: string | null = null;
  activeSection = 'home';

  sections = [
    { id: 'home', label: 'Home' },
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'our-expertise', label: 'Our Expertise' },
    // { id: 'slider', label: 'Project photos' },
    { id: 'slider', label: 'Our Partners' },
    // { id: 'featured-projects', label: 'Featured Projects' },
    { id: 'our-location', label: 'Our Location' },
    { id: 'get-in-touch', label: 'Get In Touch' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  onMouseEnter(sectionId: string): void {
    this.hoveredSection = sectionId;
  }

  onMouseLeave(): void {
    this.hoveredSection = null;
  }

  isHovered(sectionId: string): boolean {
    return this.hoveredSection === sectionId;
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.activeSection = id;
  }

  private updateActiveSection(): void {
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }
}
