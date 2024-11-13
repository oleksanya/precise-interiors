import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  certificates = [
    {
      imgSrc: '/certificates/1.jpg',
      imgAlt: 'certificate image',
    },
    {
      imgSrc: '/certificates/2.jpg',
      imgAlt: 'certificate image',
    },
    {
      imgSrc: '/certificates/3.jpg',
      imgAlt: 'certificate image',
    },
    {
      imgSrc: '/certificates/4.jpg',
      imgAlt: 'certificate image',
    },
    {
      imgSrc: '/certificates/5.jpg',
      imgAlt: 'certificate image',
    },
  ];
}