import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { IntersectionObserverDirective } from '../../directives/intersection-observer.directive';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-expertise',
  standalone: true,
  imports: [IntersectionObserverDirective, MatIconModule, RouterModule],
  templateUrl: './our-expertise.component.html',
  styleUrl: './our-expertise.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurExpertiseComponent implements AfterViewInit {
  isH2Visible = false;
  isDivVisible = false;

  @ViewChild('swiperContainer') swiperContainerRef!: ElementRef;

  onHeadingVisibilityChange(isVisible: boolean) {
    if (isVisible) {
      this.isH2Visible = true;
    }
  }

  ngAfterViewInit(): void {
    const swiperElement = this.swiperContainerRef.nativeElement;
    const style = document.createElement('style');
    style.textContent = `
      .swiper-pagination-bullet-active[part="bullet-active"] {
        background: white; 
        width: 3rem;
        border-radius: 1rem;
        height: 0.67rem;
        transition: width 0.3s ease;
      }

      .swiper-pagination-bullet[part="bullet"] {
        background: white;
        width: 0.7rem;
        height: 0.67rem;
        border-radius: 50%;
        transition: width 0.3s ease;
      }
      .swiper-pagination[part="pagination"].swiper-pagination-clickable { 
        bottom: 0;
      }
    `;

    swiperElement.shadowRoot.appendChild(style);
  }

  expertiseItems = [
    {
      iconSrc: '/section-icons/icon_1.png',
      iconAlt: 'Internal partitioning icon',
      title: 'Internal Partitioning',
      description:
        'Efficient space division for enhanced privacy and functionality in both commercial and residential properties.',
    },
    {
      iconSrc: '/section-icons/icon_2.png',
      iconAlt: 'SFS (steel framing system) icon',
      title: 'SFS (Steel Framing System)',
      description:
        'Lightweight, durable steel framing structures, ideal for fast, cost-effective, and versatile construction.',
    },
    {
      iconSrc: '/section-icons/icon_3.png',
      iconAlt: 'Refurbishment icon',
      title: 'Refurbishment',
      description:
        'Revitalizing and upgrading existing spaces with modern design and improved functionality.',
    },
    {
      iconSrc: '/section-icons/icon_4.png',
      iconAlt: 'Retrofitting icon',
      title: 'Retrofitting',
      description:
        'Upgrading existing buildings to meet modern standards for energy efficiency, safety, and functionality.',
    },
    {
      iconSrc: '/section-icons/icon_5.png',
      iconAlt: 'Suspended ceilings icon',
      title: 'Suspended Ceilings',
      description:
        'Stylish and practical ceiling solutions for improved acoustics, aesthetics, and easy maintenance.',
    },
    {
      iconSrc: '/section-icons/icon_6.png',
      iconAlt: 'External cladding icon',
      title: 'External Cladding',
      description:
        'Protective and aesthetically pleasing external facades that enhance durability and thermal insulation.',
    },
    {
      iconSrc: '/section-icons/icon_7.png',
      iconAlt: 'Commercial and residential new build icon',
      title: 'Commercial and Residential New Build',
      description:
        'From conception to completion, we construct innovative and high-quality commercial and residential buildings.',
    },
  ];

  onDivVisibilityChange(isVisible: boolean) {
    if (isVisible) {
      this.isDivVisible = true;
    }
  }
}
