import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-have-worked-with',
  standalone: true,
  imports: [],
  templateUrl: './who-we-have-worked-with.component.html',
  styleUrl: './who-we-have-worked-with.component.css',
})
export class WhoWeHaveWorkedWithComponent {
  logos = [
    { imgSrc: 'worked-with-logos/Ace-Logo.png' },
    { imgSrc: 'worked-with-logos/Opteum.png' },
    { imgSrc: 'worked-with-logos/dfc_full.jpg' },
  ];
}
