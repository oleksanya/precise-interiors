import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent implements OnInit {
  slides_xs = [
    { imgSrc: 'slider-photos/portrait/1.jpg' },
    { imgSrc: 'slider-photos/portrait/2.jpg' },
    { imgSrc: 'slider-photos/portrait/3.jpg' },
    { imgSrc: 'slider-photos/portrait/4.jpg' },
    { imgSrc: 'slider-photos/portrait/5.jpg' },
  ];

  slides_lg = [
    { imgSrc: 'slider-photos/landscapes/1.png' },
    { imgSrc: 'slider-photos/landscapes/2.jpg' },
    { imgSrc: 'slider-photos/landscapes/3.jpg' },
    { imgSrc: 'slider-photos/landscapes/4.jpg' },
    { imgSrc: 'slider-photos/landscapes/5.jpg' },
    { imgSrc: 'slider-photos/landscapes/6.jpg' },
  ];

  combinedSlides: { imgSrc: string; size: string }[] = [];

  ngOnInit() {
    this.combineAndShuffleSlides();
    console.log('Slides after timeout:', this.combinedSlides);
  }

  combineAndShuffleSlides() {
    const xsSlides = this.slides_xs.map(slide => ({
      ...slide,
      size: 'portrait',
    }));
    const lgSlides = this.slides_lg.map(slide => ({
      ...slide,
      size: 'landscape',
    }));

    this.combinedSlides = [...xsSlides, ...lgSlides];

    for (let i = this.combinedSlides.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.combinedSlides[i], this.combinedSlides[j]] = [
        this.combinedSlides[j],
        this.combinedSlides[i],
      ];
    }
  }
}
