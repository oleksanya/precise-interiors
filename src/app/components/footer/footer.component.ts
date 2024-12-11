import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  certificates = [
    {
      imgSrc: './certificates/1.png',
      imgAlt: 'certificate image',
    },
    {
      imgSrc: './certificates/2.png',
      imgAlt: 'certificate image',
    },
    {
      imgSrc: './certificates/3.png',
      imgAlt: 'certificate image',
    },
    {
      imgSrc: './certificates/4.png',
      imgAlt: 'certificate image',
    },
  ];
}
